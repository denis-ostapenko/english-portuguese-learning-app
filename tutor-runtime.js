(function (global) {
  const MAX_HISTORY_MESSAGES = 8;
  const MAX_MESSAGE_CHARS = 800;
  const MAX_RESPONSE_CHARS = 65536;
  const DEFAULT_TIMEOUT_MS = 15000;
  const REGISTERS = new Set(["neutral", "casual", "polite"]);

  function cleanText(value, limit = MAX_MESSAGE_CHARS) {
    return String(value || "")
      .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, limit);
  }

  function validateEndpoint(value) {
    if (typeof value !== "string" || !value.trim() || value.length > 500) return null;
    try {
      const url = new URL(value.trim());
      const local = ["localhost", "127.0.0.1", "::1", "[::1]"].includes(url.hostname);
      if (url.username || url.password || url.hash) return null;
      if (url.protocol !== "https:" && !(local && url.protocol === "http:")) return null;
      return url.href;
    } catch {
      return null;
    }
  }

  function boundHistory(messages) {
    if (!Array.isArray(messages)) return [];
    return messages
      .filter(message => message && ["user", "assistant"].includes(message.role))
      .map(message => ({ role: message.role, content: cleanText(message.content) }))
      .filter(message => message.content)
      .slice(-MAX_HISTORY_MESSAGES);
  }

  function extractContent(payload) {
    const candidates = [
      payload?.choices?.[0]?.message?.content,
      payload?.choices?.[0]?.text,
      payload?.output_text,
      payload?.response,
      payload?.content,
    ];
    const outputParts = payload?.output?.flatMap(item => item?.content || []) || [];
    candidates.push(outputParts.map(part => part?.text || part?.content || "").join(""));
    for (const candidate of candidates) {
      if (typeof candidate === "string" && candidate.trim()) return candidate.trim();
      if (Array.isArray(candidate)) {
        const joined = candidate.map(part => typeof part === "string" ? part : part?.text || part?.content || "").join("").trim();
        if (joined) return joined;
      }
    }
    return "";
  }

  function boundedRequired(value, limit) {
    if (typeof value !== "string") return null;
    const result = cleanText(value, limit);
    return result || null;
  }

  function boundedOptional(value, limit) {
    if (value === null || value === undefined) return null;
    return boundedRequired(value, limit);
  }

  function looksLikeLanguageDrift(text, direction) {
    const words = ` ${String(text).toLowerCase().replace(/[^a-záàâãéêíóôõúç']/g, " ")} `;
    const english = [" the ", " and ", " you ", " your ", " is ", " are ", " would ", " please "].filter(word => words.includes(word)).length;
    const portuguese = [" o ", " a ", " e ", " você ", " seu ", " sua ", " é ", " são ", " por favor "].filter(word => words.includes(word)).length;
    return direction === "en-pt" ? english >= 3 && portuguese === 0 : portuguese >= 3 && english === 0;
  }

  function localizedFallback(direction, sourceLocale, kind = "invalid") {
    if (kind === "drift") return direction === "en-pt" ? "Vamos continuar em português. Tente mais uma vez." : "Let's continue in English. Try one more time.";
    return sourceLocale === "pt-BR" ? "Não consegui ler a resposta do tutor. Tente novamente." : "The tutor reply could not be read. Please try again.";
  }

  function validateStructured(value, direction) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const reply = boundedRequired(value.reply, 800);
    if (!reply) return null;
    if (looksLikeLanguageDrift(reply, direction)) return { drift: true };

    let correction = null;
    if (value.correction !== null && value.correction !== undefined) {
      if (!value.correction || typeof value.correction !== "object" || Array.isArray(value.correction)) return null;
      const original = boundedRequired(value.correction.original, 400);
      const recast = boundedRequired(value.correction.recast, 400);
      const note = boundedRequired(value.correction.note, 300);
      if (!original || !recast || !note) return null;
      correction = { original, recast, note };
    }

    let newVocabulary = null;
    if (value.newVocabulary !== null && value.newVocabulary !== undefined) {
      if (!value.newVocabulary || typeof value.newVocabulary !== "object" || Array.isArray(value.newVocabulary)) return null;
      const term = boundedRequired(value.newVocabulary.term, 160);
      const meaning = boundedRequired(value.newVocabulary.meaning, 240);
      const register = boundedRequired(value.newVocabulary.register, 20);
      if (!term || !meaning || !REGISTERS.has(register)) return null;
      newVocabulary = { term, meaning, register };
    }

    return {
      reply,
      correction,
      retryCue: boundedOptional(value.retryCue, 300),
      rescueTranslation: boundedOptional(value.rescueTranslation, 400),
      newVocabulary,
      fallback: false,
    };
  }

  function parseTutorContent(content, options = {}) {
    const direction = options.direction === "pt-en" ? "pt-en" : "en-pt";
    const sourceLocale = options.sourceLocale === "pt-BR" ? "pt-BR" : "en-US";
    const raw = String(content || "").trim().slice(0, MAX_RESPONSE_CHARS);
    if (!raw) return { reply: localizedFallback(direction, sourceLocale), correction: null, retryCue: null, rescueTranslation: null, newVocabulary: null, fallback: true };
    try {
      const validated = validateStructured(JSON.parse(raw), direction);
      if (validated?.drift) return { reply: localizedFallback(direction, sourceLocale, "drift"), correction: null, retryCue: null, rescueTranslation: null, newVocabulary: null, fallback: true };
      if (validated) return validated;
    } catch {
      // Ordinary provider text is handled below.
    }
    const ordinary = cleanText(raw, 800);
    const malformedJson = /^[\[{]/.test(raw);
    const drift = looksLikeLanguageDrift(ordinary, direction);
    return {
      reply: malformedJson || drift ? localizedFallback(direction, sourceLocale, drift ? "drift" : "invalid") : ordinary || localizedFallback(direction, sourceLocale),
      correction: null,
      retryCue: null,
      rescueTranslation: null,
      newVocabulary: null,
      fallback: true,
    };
  }

  async function requestTutor(options) {
    const endpoint = validateEndpoint(options.endpoint);
    const model = cleanText(options.model, 120);
    const key = String(options.key || "");
    if (!endpoint || !model || !key) throw new Error("configuration");
    const fetchImpl = options.fetchImpl || global.fetch;
    const controller = new AbortController();
    const timeoutMs = Math.max(1, Number(options.timeoutMs) || DEFAULT_TIMEOUT_MS);
    const timeout = setTimeout(() => controller.abort("timeout"), timeoutMs);
    const externalSignal = options.signal;
    const cancel = () => controller.abort(externalSignal?.reason || "cancelled");
    if (externalSignal?.aborted) cancel();
    else externalSignal?.addEventListener("abort", cancel, { once: true });
    const body = {
      model,
      messages: [{ role: "system", content: String(options.systemPrompt || "") }, ...boundHistory(options.messages)],
      temperature: 0.5,
      max_tokens: 240,
    };
    try {
      const response = await fetchImpl(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key}` },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`http-${response.status}`);
      const raw = (await response.text()).slice(0, MAX_RESPONSE_CHARS);
      let content = raw;
      try { content = extractContent(JSON.parse(raw)) || raw; } catch { /* Plain HTTP responses remain plain text. */ }
      return { content, requestBody: body };
    } catch (error) {
      if (controller.signal.aborted && !externalSignal?.aborted) throw new Error("timeout");
      throw error;
    } finally {
      clearTimeout(timeout);
      externalSignal?.removeEventListener("abort", cancel);
    }
  }

  function createTutorFlight() {
    let controller = null;
    return {
      get pending() { return Boolean(controller); },
      cancel(reason = "cancelled") { if (controller) controller.abort(reason); },
      async run(task) {
        if (controller) return { skipped: true };
        controller = new AbortController();
        try { return await task(controller.signal); }
        finally { controller = null; }
      },
    };
  }

  const api = {
    MAX_HISTORY_MESSAGES,
    MAX_MESSAGE_CHARS,
    cleanText,
    validateEndpoint,
    boundHistory,
    extractContent,
    looksLikeLanguageDrift,
    parseTutorContent,
    requestTutor,
    createTutorFlight,
  };
  global.DenisTutorRuntime = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
}(typeof globalThis !== "undefined" ? globalThis : this));
