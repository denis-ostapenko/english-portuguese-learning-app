const APP_KEY = "denis-en-pt-learning-v1";
const APP_VERSION = "0.91";
const AUTHOR_URL = "https://denisostapenko.com";
const APP_BACKUP_KEY = `${APP_KEY}-backup`;
const STATE_SCHEMA_VERSION = 2;
const MAX_IMPORT_BYTES = 1024 * 1024;
const INTERVALS = [1, 3, 7, 14, 30];

const COPY = {
  en: {
    brand: "English ↔ Português",
    direction: "English → Português",
    nav: ["Today", "Learn", "Review", "Words", "Foundations", "Situations", "Grammar", "Tutor", "Settings"],
    navIcons: ["⌂", "◆", "↻", "Aa", "A·", "◫", "§", "◉", "⚙"],
    welcomeEyebrow: "Your daily session",
    welcome: "Small steps. Real conversations.",
    welcomeText: "Learn Brazilian Portuguese through useful phrases, spaced repetition, listening and everyday situations.",
    startLearning: "Learn new words",
    startReview: "Review due cards",
    learned: "Learned",
    due: "Due now",
    scenesDone: "Scenes heard",
    todayPlan: "Today’s path",
    stepReview: "Review what is due",
    stepReviewText: "Keep older words available in memory.",
    stepLearn: "Learn 10 useful items",
    stepLearnText: "Move through the course in a practical order.",
    stepListen: "Listen to a situation",
    stepListenText: "Train meaning from context and natural speech.",
    stepSpeak: "Speak out loud",
    stepSpeakText: "Use the tutor or shadow a dialogue.",
    learnTitle: "Learn something useful",
    learnSub: "Reveal the meaning, listen, then decide whether the item is ready for review.",
    listen: "Listen",
    reveal: "Reveal",
    know: "I know it",
    later: "Later",
    complete: "This track is complete",
    completeText: "Choose another track or review the items you already learned.",
    tracks: { core: "Core", professional: "Professional", verbs: "Verbs", adjectives: "Adjectives", nouns: "Nouns" },
    reviewTitle: "Review",
    reviewSub: "The prompt changes as memory grows: recognition, production and listening.",
    noReview: "Nothing is due",
    noReviewText: "Learn a few new items or come back tomorrow.",
    showAnswer: "Show answer",
    again: "Again",
    good: "Good",
    promptMeaning: "What does this mean?",
    promptProduce: "Say it in Portuguese",
    promptListen: "Listen. What did you hear?",
    wordsTitle: "Vocabulary",
    wordsSub: "Search the complete course and mark familiar items without changing the learning order.",
    search: "Search words or meanings",
    allTracks: "All tracks",
    allStatus: "All status",
    newStatus: "New",
    learnedStatus: "Learned",
    coreItems: "core items",
    items: "items",
    scenes: "scenes",
    noMatches: "No matching items.",
    foundationsTitle: "Foundations for fast speech",
    foundationsSub: "Learn enough sound, reading and structure to understand context and make your intention clear. Clarity comes before perfection.",
    foundationLessons: "lessons",
    foundationDone: "completed",
    foundationGoal: "Immediate goal",
    foundationRule: "Useful shortcut",
    foundationExamples: "Hear and repeat",
    foundationSpeak: "Say the whole message",
    foundationBack: "All foundation lessons",
    foundationComplete: "Mark lesson complete",
    foundationCompleted: "Lesson completed",
    slow: "Slow",
    natural: "Natural",
    record: "Record yourself",
    stopRecording: "Stop recording",
    recordingReady: "Your recording stays only in this browser session.",
    recordingUnavailable: "Microphone recording is unavailable in this browser.",
    visualPattern: "Message pattern",
    timelinePast: "Past",
    timelineNow: "Now",
    timelineNext: "Next",
    situationsTitle: "Situations",
    situationsSub: "Short dialogues with natural audio. Read, hide translations or shadow every line.",
    lines: "lines",
    back: "All situations",
    playAll: "Play all",
    stopAudio: "Stop",
    hideTranslations: "Hide translations",
    showTranslations: "Show translations",
    markListened: "Mark as listened",
    grammarTitle: "Grammar for speaking",
    grammarSub: "Compact rules, useful examples and the forms that matter in conversation.",
    sentenceRules: "Sentence patterns",
    tenses: "Useful tenses",
    irregulars: "Irregular verbs",
    irregularBase: "Infinitive",
    irregularPast: "eu past",
    irregularThird: "ele/ela past",
    tutorTitle: "Speaking practice",
    tutorSub: "Use guided offline practice, or connect your own OpenAI-compatible service for a live tutor.",
    offlineTitle: "Works without a key",
    offlineText: "Choose a situation, listen to each line and repeat it aloud. Guided practice works entirely offline.",
    startOffline: "Start guided practice",
    connectAi: "Connect my AI service",
    aiNotice: "No API key is included. Your key stays in this browser session and is sent only to the endpoint you enter.",
    endpoint: "Chat completions endpoint",
    model: "Model name",
    apiKey: "API key for this session",
    saveSession: "Use this connection",
    disconnect: "Disconnect",
    typeTarget: "Write in Portuguese",
    send: "Send",
    cancelRequest: "Cancel",
    tutorMode: "Practice mode",
    tutorRegister: "Language style",
    tutorScenario: "Optional role-play scenario",
    tutorScenarioPlaceholder: "For example: ordering lunch at a busy cafe",
    modeConversation: "Conversation",
    modeRoleplay: "Role-play",
    modeReview: "Vocabulary review",
    modeExplanation: "Explanation",
    modeCorrection: "Correction practice",
    registerNeutral: "Neutral",
    registerCasual: "Casual",
    registerPolite: "Polite",
    tutorWorking: "Tutor is replying...",
    tutorFallback: "Shown as a safe plain-text reply because the provider did not follow the structured format.",
    correctionLabel: "Correction",
    retryLabel: "Try again",
    rescueLabel: "Quick translation",
    vocabularyLabel: "New vocabulary",
    aiTimeout: "The tutor request timed out. Please try again.",
    settingsTitle: "Settings",
    settingsSub: "Change direction, daily goal and local progress. The course itself never needs an account.",
    languageTitle: "Learning direction",
    changeDirection: "Change direction",
    progressTitle: "Your data",
    export: "Export progress",
    import: "Import progress",
    reset: "Reset current direction",
    dailyGoal: "Daily new-item goal",
    privacyTitle: "Privacy and keys",
    privacyText: "Progress stays on this device. The repository contains no private API keys. Optional AI credentials are not stored after the browser session ends.",
    authorTitle: "About this project",
    authorText: "Free to use, share and modify under the MIT License.",
    confirmReset: "Reset all progress for this learning direction?",
    imported: "Progress imported.",
    importSummary: "Progress imported. Discarded records",
    importError: "This progress file is not valid.",
    storageError: "Progress could not be saved. The last saved version was restored.",
    audioUnavailable: "This approved recording is not available yet.",
    loadMore: "Load more",
    aiMissing: "Add an endpoint, model and API key in Settings first.",
    aiError: "The tutor could not connect. Check the endpoint, model, key and browser CORS permissions.",
    installHint: "Install from your browser menu for an app-like offline experience.",
    offlineContract: "Course text works offline. Audio and images are cached after you use them; uncached media stays unavailable until you reconnect.",
    footerLead: "Created by",
    footerLicense: "MIT License",
    onboardingTitle: "Which language do you already know?",
    onboardingLead: "Choose your known language. The entire interface and all explanations will use it.",
    knowEnglish: "I know English",
    learnPortuguese: "I want to learn Brazilian Portuguese",
    knowPortuguese: "Eu sei português",
    learnEnglish: "Quero aprender inglês americano",
    imageAlt: "Learning card illustration"
  },
  pt: {
    brand: "English ↔ Português",
    direction: "Português → Inglês",
    nav: ["Hoje", "Aprender", "Revisar", "Palavras", "Fundamentos", "Situações", "Gramática", "Tutor", "Ajustes"],
    navIcons: ["⌂", "◆", "↻", "Aa", "A·", "◫", "§", "◉", "⚙"],
    welcomeEyebrow: "Sua sessão diária",
    welcome: "Passos pequenos. Conversas reais.",
    welcomeText: "Aprenda inglês americano com frases úteis, repetição espaçada, áudio e situações do dia a dia.",
    startLearning: "Aprender palavras novas",
    startReview: "Revisar cartões",
    learned: "Aprendidos",
    due: "Para revisar",
    scenesDone: "Situações ouvidas",
    todayPlan: "Caminho de hoje",
    stepReview: "Revise o que venceu",
    stepReviewText: "Mantenha as palavras antigas disponíveis na memória.",
    stepLearn: "Aprenda 10 itens úteis",
    stepLearnText: "Avance pelo curso em uma ordem prática.",
    stepListen: "Ouça uma situação",
    stepListenText: "Treine o sentido pelo contexto e pela fala natural.",
    stepSpeak: "Fale em voz alta",
    stepSpeakText: "Use o tutor ou repita um diálogo junto com o áudio.",
    learnTitle: "Aprenda algo útil",
    learnSub: "Mostre o significado, ouça e decida se o item já pode entrar nas revisões.",
    listen: "Ouvir",
    reveal: "Mostrar",
    know: "Eu sei",
    later: "Depois",
    complete: "Esta trilha está completa",
    completeText: "Escolha outra trilha ou revise os itens já aprendidos.",
    tracks: { core: "Essencial", professional: "Profissional", verbs: "Verbos", adjectives: "Adjetivos", nouns: "Substantivos" },
    reviewTitle: "Revisão",
    reviewSub: "A tarefa muda com a memória: reconhecimento, produção e compreensão auditiva.",
    noReview: "Nada para revisar",
    noReviewText: "Aprenda alguns itens novos ou volte amanhã.",
    showAnswer: "Mostrar resposta",
    again: "De novo",
    good: "Acertei",
    promptMeaning: "O que isso significa?",
    promptProduce: "Diga em inglês",
    promptListen: "Ouça. O que você entendeu?",
    wordsTitle: "Vocabulário",
    wordsSub: "Pesquise o curso completo e marque itens conhecidos sem mudar a ordem de aprendizagem.",
    search: "Buscar palavras ou significados",
    allTracks: "Todas as trilhas",
    allStatus: "Todos",
    newStatus: "Novo",
    learnedStatus: "Aprendido",
    coreItems: "itens essenciais",
    items: "itens",
    scenes: "situações",
    noMatches: "Nenhum item encontrado.",
    foundationsTitle: "Base para falar rápido",
    foundationsSub: "Aprenda apenas o som, a leitura e a estrutura necessários para entender o contexto e deixar sua intenção clara. Clareza vem antes da perfeição.",
    foundationLessons: "aulas",
    foundationDone: "concluídas",
    foundationGoal: "Objetivo imediato",
    foundationRule: "Atalho útil",
    foundationExamples: "Ouça e repita",
    foundationSpeak: "Diga a mensagem inteira",
    foundationBack: "Todas as aulas de base",
    foundationComplete: "Marcar aula como concluída",
    foundationCompleted: "Aula concluída",
    slow: "Devagar",
    natural: "Natural",
    record: "Gravar minha voz",
    stopRecording: "Parar gravação",
    recordingReady: "Sua gravação fica apenas nesta sessão do navegador.",
    recordingUnavailable: "A gravação pelo microfone não está disponível neste navegador.",
    visualPattern: "Molde da mensagem",
    timelinePast: "Passado",
    timelineNow: "Agora",
    timelineNext: "Depois",
    situationsTitle: "Situações",
    situationsSub: "Diálogos curtos com áudio natural. Leia, esconda a tradução ou repita cada fala.",
    lines: "falas",
    back: "Todas as situações",
    playAll: "Ouvir tudo",
    stopAudio: "Parar",
    hideTranslations: "Esconder traduções",
    showTranslations: "Mostrar traduções",
    markListened: "Marcar como ouvida",
    grammarTitle: "Gramática para falar",
    grammarSub: "Regras compactas, exemplos úteis e formas importantes para a conversa.",
    sentenceRules: "Estruturas de frase",
    tenses: "Tempos úteis",
    irregulars: "Verbos irregulares",
    irregularBase: "Forma base",
    irregularPast: "Passado",
    irregularThird: "Particípio",
    tutorTitle: "Prática de conversação",
    tutorSub: "Use a prática guiada offline ou conecte seu próprio serviço compatível com OpenAI.",
    offlineTitle: "Funciona sem chave",
    offlineText: "Escolha uma situação, ouça cada fala e repita em voz alta. A prática guiada funciona totalmente offline.",
    startOffline: "Iniciar prática guiada",
    connectAi: "Conectar meu serviço de IA",
    aiNotice: "Nenhuma chave está incluída. Sua chave fica apenas nesta sessão e é enviada somente ao endereço informado.",
    endpoint: "Endpoint de chat completions",
    model: "Nome do modelo",
    apiKey: "Chave de API desta sessão",
    saveSession: "Usar esta conexão",
    disconnect: "Desconectar",
    typeTarget: "Escreva em inglês",
    send: "Enviar",
    cancelRequest: "Cancelar",
    tutorMode: "Modo de prática",
    tutorRegister: "Estilo de linguagem",
    tutorScenario: "Cenário opcional da dramatização",
    tutorScenarioPlaceholder: "Por exemplo: pedir almoço em um café movimentado",
    modeConversation: "Conversa",
    modeRoleplay: "Dramatização",
    modeReview: "Revisão de vocabulário",
    modeExplanation: "Explicação",
    modeCorrection: "Prática de correção",
    registerNeutral: "Neutro",
    registerCasual: "Casual",
    registerPolite: "Educado",
    tutorWorking: "O tutor está respondendo...",
    tutorFallback: "Exibido como texto simples e seguro porque o provedor não seguiu o formato estruturado.",
    correctionLabel: "Correção",
    retryLabel: "Tente de novo",
    rescueLabel: "Tradução rápida",
    vocabularyLabel: "Vocabulário novo",
    aiTimeout: "A solicitação ao tutor excedeu o tempo limite. Tente novamente.",
    settingsTitle: "Ajustes",
    settingsSub: "Mude a direção, a meta diária e o progresso local. O curso não exige conta.",
    languageTitle: "Direção de aprendizagem",
    changeDirection: "Mudar direção",
    progressTitle: "Seus dados",
    export: "Exportar progresso",
    import: "Importar progresso",
    reset: "Zerar direção atual",
    dailyGoal: "Meta diária de itens novos",
    privacyTitle: "Privacidade e chaves",
    privacyText: "O progresso fica neste dispositivo. O repositório não contém chaves privadas. Credenciais opcionais de IA somem quando a sessão do navegador termina.",
    authorTitle: "Sobre o projeto",
    authorText: "Uso, compartilhamento e modificação livres sob a Licença MIT.",
    confirmReset: "Zerar todo o progresso desta direção?",
    imported: "Progresso importado.",
    importSummary: "Progresso importado. Registros descartados",
    importError: "Este arquivo de progresso não é válido.",
    storageError: "Não foi possível salvar o progresso. A última versão salva foi restaurada.",
    audioUnavailable: "Esta gravação aprovada ainda não está disponível.",
    loadMore: "Carregar mais",
    aiMissing: "Adicione endpoint, modelo e chave de API nos ajustes.",
    aiError: "O tutor não conseguiu conectar. Verifique endpoint, modelo, chave e permissões CORS.",
    installHint: "Instale pelo menu do navegador para usar como aplicativo offline.",
    offlineContract: "O texto do curso funciona offline. Áudios e imagens são armazenados depois do uso; mídias ainda não acessadas ficam indisponíveis até a reconexão.",
    footerLead: "Criado por",
    footerLicense: "Licença MIT",
    onboardingTitle: "Qual idioma você já conhece?",
    onboardingLead: "Escolha seu idioma conhecido. Toda a interface e todas as explicações usarão esse idioma.",
    knowEnglish: "I know English",
    learnPortuguese: "I want to learn Brazilian Portuguese",
    knowPortuguese: "Eu sei português",
    learnEnglish: "Quero aprender inglês americano",
    imageAlt: "Ilustração do cartão de aprendizagem"
  }
};

let persistenceNotice = "";
let state = loadState();
let lastSavedSerialized = JSON.stringify(state);
let course = null;
let view = "Today";
let reveal = false;
let activeTrack = "core";
let delayed = new Set();
let activeScene = null;
let translationsVisible = true;
let wordSearch = "";
let wordTrack = "all";
let wordStatus = "all";
let wordVisualLimit = 48;
let reviewCard = null;
let chat = [];
let tutorMode = "conversation";
let tutorRegister = "neutral";
let tutorScenario = "";
const tutorFlight = DenisTutorRuntime.createTutorFlight();
let activeFoundationTrack = "sounds";
let activeFoundationLesson = null;
let foundationRecorder = null;
let foundationStream = null;
let foundationChunks = [];
let foundationRecordingUrl = "";

const audioController = createMediaController({
  onUnavailable: context => showAudioUnavailable(context?.button)
});

function defaultState() {
  return {
    schemaVersion: STATE_SCHEMA_VERSION,
    direction: null,
    dailyGoal: 10,
    progress: { en: {}, pt: {} },
    foundationProgress: { en: [], pt: [] },
    listenedScenes: { en: [], pt: [] },
    daily: {},
    ai: { endpoint: "", model: "" }
  };
}

function loadState() {
  for (const key of [APP_KEY, APP_BACKUP_KEY]) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      return normalizeState(migrateState(JSON.parse(raw)), true);
    } catch {
      continue;
    }
  }
  return defaultState();
}

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function migrateState(value) {
  if (!isObject(value)) throw new Error("invalid state");
  const version = value.schemaVersion === undefined ? 1 : Number(value.schemaVersion);
  if (!Number.isInteger(version) || version < 1 || version > STATE_SCHEMA_VERSION) throw new Error("unsupported schema");
  return version === STATE_SCHEMA_VERSION ? value : { ...value, schemaVersion: STATE_SCHEMA_VERSION };
}

function isValidDateKey(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function normalizeProgress(value) {
  if (!isObject(value)) return {};
  const result = {};
  Object.entries(value).forEach(([id, item]) => {
    if (!isObject(item) || !Number.isInteger(item.stage) || item.stage < 0 || item.stage >= INTERVALS.length) return;
    if (!isValidDateKey(item.due) || !isValidDateKey(item.learnedAt)) return;
    result[id] = { stage: item.stage, due: item.due, learnedAt: item.learnedAt };
  });
  return result;
}

function normalizeState(value, allowEmptyDirection = false) {
  if (!isObject(value)) throw new Error("invalid state");
  if (!allowEmptyDirection && !["en-pt", "pt-en"].includes(value.direction)) throw new Error("invalid direction");
  const direction = ["en-pt", "pt-en"].includes(value.direction) ? value.direction : null;
  const dailyGoal = Math.max(1, Math.min(50, Number(value.dailyGoal) || 10));
  const progressValue = isObject(value.progress) ? value.progress : {};
  const foundationValue = isObject(value.foundationProgress) ? value.foundationProgress : {};
  const scenesValue = isObject(value.listenedScenes) ? value.listenedScenes : {};
  const dailyValue = isObject(value.daily) ? value.daily : {};
  const daily = {};
  Object.entries(dailyValue).forEach(([key, counters]) => {
    const match = key.match(/^(en|pt):(\d{4}-\d{2}-\d{2})$/);
    if (!match || !isValidDateKey(match[2]) || !isObject(counters)) return;
    daily[key] = Object.fromEntries(["learned", "reviewed", "listened", "spoken"].map(name => [name, Math.max(0, Math.floor(Number(counters[name]) || 0))]));
  });
  const aiValue = isObject(value.ai) ? value.ai : {};
  return {
    schemaVersion: STATE_SCHEMA_VERSION,
    direction,
    dailyGoal,
    progress: { en: normalizeProgress(progressValue.en), pt: normalizeProgress(progressValue.pt) },
    foundationProgress: {
      en: Array.isArray(foundationValue.en) ? [...new Set(foundationValue.en.filter(item => typeof item === "string"))] : [],
      pt: Array.isArray(foundationValue.pt) ? [...new Set(foundationValue.pt.filter(item => typeof item === "string"))] : []
    },
    listenedScenes: {
      en: Array.isArray(scenesValue.en) ? [...new Set(scenesValue.en.filter(item => typeof item === "string"))] : [],
      pt: Array.isArray(scenesValue.pt) ? [...new Set(scenesValue.pt.filter(item => typeof item === "string"))] : []
    },
    daily,
    ai: {
      endpoint: typeof aiValue.endpoint === "string" ? aiValue.endpoint.slice(0, 500) : "",
      model: typeof aiValue.model === "string" ? aiValue.model.slice(0, 120) : ""
    }
  };
}

function stateRecordCount(value) {
  if (!isObject(value)) return 0;
  const progressValue = isObject(value.progress) ? value.progress : {};
  const foundationValue = isObject(value.foundationProgress) ? value.foundationProgress : {};
  const scenesValue = isObject(value.listenedScenes) ? value.listenedScenes : {};
  const dailyValue = isObject(value.daily) ? value.daily : {};
  return ["en", "pt"].reduce((total, language) => total
    + Object.keys(isObject(progressValue[language]) ? progressValue[language] : {}).length
    + (Array.isArray(foundationValue[language]) ? foundationValue[language].length : 0)
    + (Array.isArray(scenesValue[language]) ? scenesValue[language].length : 0), 0)
    + Object.keys(dailyValue).length;
}

function saveState() {
  const serialized = JSON.stringify(state);
  try {
    const prior = localStorage.getItem(APP_KEY);
    if (prior) localStorage.setItem(APP_BACKUP_KEY, prior);
    localStorage.setItem(APP_KEY, serialized);
    lastSavedSerialized = serialized;
    persistenceNotice = "";
    return true;
  } catch {
    state = normalizeState(migrateState(JSON.parse(lastSavedSerialized)), true);
    persistenceNotice = COPY[state.direction === "pt-en" ? "pt" : "en"].storageError;
    return false;
  }
}

function sourceLanguage() { return state.direction === "en-pt" ? "en" : "pt"; }
function targetLanguage() { return state.direction === "en-pt" ? "pt" : "en"; }
function t() { return COPY[sourceLanguage()]; }
function progress() { return state.progress[targetLanguage()]; }
function foundationProgress() { return state.foundationProgress[targetLanguage()]; }
function dateKey(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function todayKey() { return dateKey(); }
function addDays(days) { const date = new Date(); date.setHours(12, 0, 0, 0); date.setDate(date.getDate() + days); return dateKey(date); }

function resetTransientUi() {
  tutorFlight.cancel("navigation");
  audioController.cancel();
  cleanupFoundationRecording();
  view = "Today";
  reveal = false;
  activeTrack = "core";
  delayed.clear();
  activeScene = null;
  translationsVisible = true;
  wordSearch = "";
  wordTrack = "all";
  wordStatus = "all";
  wordVisualLimit = 48;
  reviewCard = null;
  chat = [];
  tutorMode = "conversation";
  tutorRegister = "neutral";
  tutorScenario = "";
  activeFoundationTrack = "sounds";
  activeFoundationLesson = null;
}

function ensureDaily() {
  const key = `${targetLanguage()}:${todayKey()}`;
  if (!state.daily[key]) state.daily[key] = { learned: 0, reviewed: 0, listened: 0, spoken: 0 };
  return state.daily[key];
}

async function loadCourse() {
  if (!state.direction) return;
  document.getElementById("app").innerHTML = `<div class="loading">Loading course...</div>`;
  const response = await fetch(`data/${targetLanguage()}.json`);
  if (!response.ok) throw new Error("Course data could not be loaded");
  course = await response.json();
  const discarded = reconcileCurrentState();
  if (discarded) saveState();
  return discarded;
}

function reconcileCurrentState() {
  if (!course) return 0;
  const language = targetLanguage();
  const validUnits = new Set(allUnits().map(unit => unit.id));
  const validLessons = new Set((course.foundations?.lessons || []).map(lesson => lesson.id));
  const validScenes = new Set((course.scenes || []).map(scene => scene.id));
  let discarded = 0;
  const currentProgress = state.progress[language];
  Object.keys(currentProgress).forEach(id => {
    if (!validUnits.has(id)) {
      delete currentProgress[id];
      discarded += 1;
    }
  });
  const reconcileList = (items, valid) => {
    const result = [];
    const seen = new Set();
    items.forEach(id => {
      if (!valid.has(id) || seen.has(id)) discarded += 1;
      else {
        seen.add(id);
        result.push(id);
      }
    });
    return result;
  };
  state.foundationProgress[language] = reconcileList(state.foundationProgress[language], validLessons);
  state.listenedScenes[language] = reconcileList(state.listenedScenes[language], validScenes);
  return discarded;
}

function allUnits() {
  return Object.values(course?.tracks || {}).flat();
}

function trackEntries() {
  return Object.entries(course?.tracks || {}).filter(([, units]) => units.length);
}

function currentStudyUnit() {
  const units = course.tracks[activeTrack] || [];
  return units.find(unit => !progress()[unit.id] && !delayed.has(unit.id)) || units.find(unit => !progress()[unit.id]) || null;
}

function dueUnits() {
  const unitsById = new Map(allUnits().map(unit => [unit.id, unit]));
  return Object.entries(progress())
    .filter(([, item]) => item.due <= todayKey())
    .map(([id, item]) => ({ unit: unitsById.get(id), item }))
    .filter(entry => entry.unit)
    .sort((a, b) => a.item.due.localeCompare(b.item.due));
}

function stats() {
  return {
    learned: Object.keys(progress()).length,
    due: dueUnits().length,
    scenes: state.listenedScenes[targetLanguage()].length
  };
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function authorLink() {
  return `<a class="author-link" href="${AUTHOR_URL}" target="_blank" rel="author noopener">Denis Ostapenko</a>`;
}

function showAudioUnavailable(button) {
  const message = t().audioUnavailable;
  const status = document.querySelector("#audio-status");
  if (status) {
    status.textContent = message;
    status.hidden = false;
  }
  if (button) {
    button.dataset.audioState = "unavailable";
    button.setAttribute("aria-describedby", "audio-status");
  }
}

function clearAudioUnavailable(button) {
  const status = document.querySelector("#audio-status");
  if (status) {
    status.textContent = "";
    status.hidden = true;
  }
  if (button) {
    delete button.dataset.audioState;
    button.removeAttribute("aria-describedby");
  }
}

function setView(name) {
  tutorFlight.cancel("navigation");
  audioController.cancel();
  cleanupFoundationRecording();
  view = name;
  reveal = false;
  reviewCard = null;
  activeScene = null;
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function navName(index) { return ["Today", "Learn", "Review", "Words", "Foundations", "Situations", "Grammar", "Tutor", "Settings"][index]; }

function shell(content) {
  const copy = t();
  const currentStats = stats();
  return `
    <div class="app-shell">
      <header class="topbar">
        <button class="brand" data-action="home"><span class="brand-mark">E↔P</span><span>${copy.brand}</span></button>
        <div class="direction-pill">${copy.direction}</div>
        <div class="top-stats"><span class="mini-stat">${currentStats.learned} ${copy.learned.toLowerCase()}</span><span class="mini-stat">${currentStats.due} ${copy.due.toLowerCase()}</span></div>
      </header>
      <div class="layout">
        <nav class="sidebar" aria-label="Primary navigation">
          ${copy.nav.map((label, index) => `<button class="nav-button ${view === navName(index) ? "active" : ""}" data-view="${navName(index)}" aria-label="${escapeHtml(label)}" ${view === navName(index) ? 'aria-current="page"' : ""}><span class="nav-icon" aria-hidden="true">${copy.navIcons[index]}</span><span>${label}</span></button>`).join("")}
        </nav>
        <main class="content">${persistenceNotice ? `<div class="notice error-notice" role="alert">${escapeHtml(persistenceNotice)}</div>` : ""}<div id="audio-status" class="notice audio-notice" role="status" aria-live="polite" hidden></div>${content}<footer class="footer">${copy.footerLead} ${authorLink()} · ${copy.footerLicense} · v${APP_VERSION}</footer></main>
      </div>
    </div>`;
}

function onboarding() {
  const copy = COPY.en;
  return `
    <main class="onboarding">
      <div class="onboarding-box">
        <div class="onboarding-brand"><span class="brand-mark">E↔P</span><span>${copy.brand}</span></div>
        <p class="eyebrow">A free two-way language course</p>
        <h1>${copy.onboardingTitle}</h1>
        <p class="onboarding-lead">${copy.onboardingLead}<br><span lang="pt-BR">${COPY.pt.onboardingLead}</span></p>
        <div class="language-choice">
          <button class="language-card" data-direction="en-pt">
            <span class="flag">EN</span><h2>${copy.knowEnglish}</h2><p>${copy.learnPortuguese}</p>
          </button>
          <button class="language-card" data-direction="pt-en" lang="pt-BR">
            <span class="flag">PT</span><h2>${COPY.pt.knowPortuguese}</h2><p>${COPY.pt.learnEnglish}</p>
          </button>
        </div>
        <p class="credit">Created by ${authorLink()} · Free under the MIT License · v${APP_VERSION}</p>
      </div>
    </main>`;
}

function todayPage() {
  const copy = t();
  const currentStats = stats();
  const daily = ensureDaily();
  const totalCore = course.tracks.core.length;
  const percent = Math.round((Object.keys(progress()).length / allUnits().length) * 100);
  return shell(`<section class="page">
    <div class="hero">
      <div>
        <p class="eyebrow" style="color:var(--lime)">${copy.welcomeEyebrow}</p>
        <h1>${copy.welcome}</h1>
        <p>${copy.welcomeText}</p>
        <div class="hero-actions"><button class="button" data-view="Learn">${copy.startLearning}</button><button class="button ghost" data-view="Review">${copy.startReview} · ${currentStats.due}</button></div>
      </div>
      <div class="hero-progress"><strong>${percent}%</strong><span>${currentStats.learned} / ${allUnits().length} ${copy.learned.toLowerCase()}</span><div class="fine-print" style="color:rgba(255,255,255,.6);margin-top:9px">${totalCore} ${copy.coreItems}</div></div>
    </div>
    <div class="section grid three">
      <div class="panel stat-card"><strong>${daily.learned}</strong><span>${copy.learned}</span></div>
      <div class="panel stat-card"><strong>${currentStats.due}</strong><span>${copy.due}</span></div>
      <div class="panel stat-card"><strong>${daily.listened}</strong><span>${copy.scenesDone}</span></div>
    </div>
    <section class="section">
      <div class="section-heading"><h2>${copy.todayPlan}</h2></div>
      <div class="grid two">
        ${dailyStep(1, copy.stepReview, copy.stepReviewText, daily.reviewed > 0)}
        ${dailyStep(2, copy.stepLearn, copy.stepLearnText, daily.learned >= state.dailyGoal)}
        ${dailyStep(3, copy.stepListen, copy.stepListenText, daily.listened > 0)}
        ${dailyStep(4, copy.stepSpeak, copy.stepSpeakText, daily.spoken > 0)}
      </div>
    </section>
  </section>`);
}

function dailyStep(number, title, text, done) {
  return `<div class="panel daily-step ${done ? "done" : ""}"><span class="step-number">${done ? "✓" : number}</span><div><h3>${title}</h3><p>${text}</p></div></div>`;
}

function learnPage() {
  const copy = t();
  const unit = currentStudyUnit();
  const tracks = trackEntries();
  const card = unit ? `<div class="panel study-card">
    <div>
      ${unit.image ? `<img class="card-image" src="${unit.image}" alt="${copy.imageAlt}" onerror="this.remove()">` : ""}
      <h2 class="word">${escapeHtml(unit.word)}</h2>
      <p class="ipa">${escapeHtml(unit.ipa)}</p>
      <button class="button secondary small" data-audio="${unit.audioWord}" data-text="${escapeHtml(unit.word)}" aria-label="${copy.listen}: ${escapeHtml(unit.word)}">▶ ${copy.listen}</button>
    </div>
    ${reveal ? `<div class="answer"><p class="meaning">${escapeHtml(unit.meaning)}</p><p class="example">${escapeHtml(unit.example)}</p><p class="example-translation">${escapeHtml(unit.exampleTranslation)}</p></div>` : `<button class="answer hidden" data-action="reveal">${copy.reveal}</button>`}
    <div class="card-actions">
      ${reveal ? `<button class="button" data-action="learn-known">${copy.know}</button><button class="button secondary" data-action="learn-later">${copy.later}</button><button class="button secondary" data-audio="${unit.audioExample}" data-text="${escapeHtml(unit.example)}" aria-label="${unit.audioExampleSlow ? copy.natural : copy.listen}: ${escapeHtml(unit.example)}">▶ ${unit.audioExampleSlow ? copy.natural : copy.listen}</button>${unit.audioExampleSlow ? `<button class="button secondary" data-audio="${unit.audioExampleSlow}" data-text="${escapeHtml(unit.example)}" aria-label="${copy.slow}: ${escapeHtml(unit.example)}">▶ ${copy.slow}</button>` : ""}` : ""}
    </div>
  </div>` : `<div class="panel empty"><h2>${copy.complete}</h2><p>${copy.completeText}</p><button class="button" data-view="Review">${copy.startReview}</button></div>`;
  return shell(`<section class="page"><p class="eyebrow">${copy.nav[1]}</p><h1 class="page-title">${copy.learnTitle}</h1><p class="page-subtitle">${copy.learnSub}</p><div class="study-wrap">${card}<aside class="panel"><div class="track-list">${tracks.map(([name, units]) => {
    const learned = units.filter(unit => progress()[unit.id]).length;
    return `<button class="track-button ${activeTrack === name ? "active" : ""}" data-track="${name}"><span>${copy.tracks[name]}</span><span>${learned}/${units.length}</span></button>`;
  }).join("")}</div></aside></div></section>`);
}

function learnCurrent() {
  const unit = currentStudyUnit();
  if (!unit) return;
  progress()[unit.id] = { stage: 0, due: addDays(1), learnedAt: todayKey() };
  ensureDaily().learned += 1;
  delayed.delete(unit.id);
  reveal = false;
  saveState();
  render();
}

function delayCurrent() {
  const unit = currentStudyUnit();
  if (!unit) return;
  delayed.add(unit.id);
  reveal = false;
  if (delayed.size >= (course.tracks[activeTrack]?.filter(item => !progress()[item.id]).length || 0)) delayed.clear();
  render();
}

function reviewPage() {
  const copy = t();
  const queue = dueUnits();
  if (!reviewCard && queue.length) reviewCard = queue[0];
  if (!reviewCard) return shell(`<section class="page"><p class="eyebrow">${copy.nav[2]}</p><h1 class="page-title">${copy.reviewTitle}</h1><p class="page-subtitle">${copy.reviewSub}</p><div class="panel empty"><h2>${copy.noReview}</h2><p>${copy.noReviewText}</p><button class="button" data-view="Learn">${copy.startLearning}</button></div></section>`);
  const { unit, item } = reviewCard;
  const mode = item.stage % 3;
  const prompt = mode === 0 ? copy.promptMeaning : mode === 1 ? copy.promptProduce : copy.promptListen;
  const question = mode === 0 ? unit.word : mode === 1 ? unit.meaning : "•••";
  return shell(`<section class="page"><p class="eyebrow">${queue.length} ${copy.due.toLowerCase()}</p><h1 class="page-title">${copy.reviewTitle}</h1><p class="page-subtitle">${copy.reviewSub}</p><div class="panel study-card">
    <div><p class="eyebrow">${prompt}</p><h2 class="word">${escapeHtml(question)}</h2>${mode !== 1 ? `<p class="ipa">${escapeHtml(unit.ipa)}</p>` : ""}${mode === 2 ? `<button class="button secondary" data-audio="${unit.audioWord}" data-text="${escapeHtml(unit.word)}" aria-label="${copy.listen}: ${escapeHtml(unit.word)}">▶ ${copy.listen}</button>` : ""}</div>
    ${reveal ? `<div class="answer">${unit.image ? `<img class="card-image" src="${unit.image}" alt="${copy.imageAlt}" onerror="this.remove()">` : ""}<p class="meaning">${escapeHtml(unit.word)}</p><p class="ipa">${escapeHtml(unit.ipa)}</p><p class="example">${escapeHtml(unit.meaning)}</p><p class="example-translation">${escapeHtml(unit.example)} · ${escapeHtml(unit.exampleTranslation)}</p></div>` : `<button class="answer hidden" data-action="reveal">${copy.showAnswer}</button>`}
    ${reveal ? `<div class="card-actions"><button class="button coral" data-review="again">${copy.again}</button><button class="button" data-review="good">${copy.good}</button><button class="button secondary" data-audio="${unit.audioExample}" data-text="${escapeHtml(unit.example)}" aria-label="${unit.audioExampleSlow ? copy.natural : copy.listen}: ${escapeHtml(unit.example)}">▶ ${unit.audioExampleSlow ? copy.natural : copy.listen}</button>${unit.audioExampleSlow ? `<button class="button secondary" data-audio="${unit.audioExampleSlow}" data-text="${escapeHtml(unit.example)}" aria-label="${copy.slow}: ${escapeHtml(unit.example)}">▶ ${copy.slow}</button>` : ""}</div>` : ""}
  </div></section>`);
}

function gradeReview(result) {
  if (!reviewCard) return;
  const item = progress()[reviewCard.unit.id];
  if (result === "again") {
    item.stage = 0;
    item.due = todayKey();
  } else {
    item.stage = Math.min(item.stage + 1, INTERVALS.length - 1);
    item.due = addDays(INTERVALS[item.stage]);
  }
  ensureDaily().reviewed += 1;
  saveState();
  reveal = false;
  reviewCard = null;
  render();
}

function wordsPage() {
  const copy = t();
  const query = wordSearch.trim().toLocaleLowerCase();
  const visualUnits = allUnits().filter(unit => unit.image);
  const defaultVisualView = !query && wordTrack === "all" && wordStatus === "all";
  let units = allUnits().filter(unit => wordTrack === "all" || unit.track === wordTrack);
  units = units.filter(unit => wordStatus === "all" || (wordStatus === "learned") === Boolean(progress()[unit.id]));
  if (query) units = units.filter(unit => `${unit.word} ${unit.meaning} ${unit.ipa}`.toLocaleLowerCase().includes(query));
  units = units.slice(0, 120);
  return shell(`<section class="page"><p class="eyebrow">${allUnits().length} ${copy.items}</p><h1 class="page-title">${copy.wordsTitle}</h1><p class="page-subtitle">${copy.wordsSub}</p>
    <div class="toolbar"><input class="field" id="word-search" value="${escapeHtml(wordSearch)}" placeholder="${copy.search}"><select class="field" id="word-track"><option value="all">${copy.allTracks}</option>${trackEntries().map(([name]) => `<option value="${name}" ${wordTrack === name ? "selected" : ""}>${copy.tracks[name]}</option>`).join("")}</select><select class="field" id="word-status"><option value="all">${copy.allStatus}</option><option value="new" ${wordStatus === "new" ? "selected" : ""}>${copy.newStatus}</option><option value="learned" ${wordStatus === "learned" ? "selected" : ""}>${copy.learnedStatus}</option></select></div>
    ${defaultVisualView ? `<div class="visual-word-grid">${visualUnits.slice(0, wordVisualLimit).map(unit => `<article class="panel visual-word-card"><img src="${unit.image}" alt="${copy.imageAlt}" loading="lazy" decoding="async" onerror="this.remove()"><div class="visual-word-card-body"><h3>${escapeHtml(unit.word)}</h3><button class="button secondary small" data-audio="${unit.audioWord}" data-text="${escapeHtml(unit.word)}" aria-label="${copy.listen}: ${escapeHtml(unit.word)}">▶</button><p>${escapeHtml(unit.meaning)} · ${escapeHtml(unit.ipa)}</p></div></article>`).join("")}</div>${wordVisualLimit < visualUnits.length ? `<div class="load-more"><button class="button secondary" data-action="load-more-words">${copy.loadMore} · ${Math.min(48, visualUnits.length - wordVisualLimit)}</button></div>` : ""}` : `<div class="word-list">${units.map(unit => `<div class="word-row"><div><strong>${escapeHtml(unit.word)}</strong><div class="row-ipa">${escapeHtml(unit.ipa)}</div></div><div class="row-meaning">${escapeHtml(unit.meaning)}</div><div style="display:flex;align-items:center;gap:9px"><button class="button secondary small" data-audio="${unit.audioWord}" data-text="${escapeHtml(unit.word)}" aria-label="${copy.listen}: ${escapeHtml(unit.word)}">▶</button><button class="status-dot ${progress()[unit.id] ? "learned" : ""}" data-toggle-known="${unit.id}" aria-label="${copy.know}: ${escapeHtml(unit.word)}"></button></div></div>`).join("") || `<div class="panel empty">${copy.noMatches}</div>`}</div>`}
  </section>`);
}

function toggleKnown(id) {
  if (progress()[id]) delete progress()[id];
  else progress()[id] = { stage: 0, due: addDays(1), learnedAt: todayKey() };
  saveState();
  render();
}

function foundationUnit(text) {
  const normalized = text.toLocaleLowerCase();
  return allUnits().find(unit => unit.word.toLocaleLowerCase() === normalized) || null;
}

function foundationVisual(lesson) {
  const copy = t();
  if (lesson.track === "sentences") {
    const example = lesson.examples[0];
    const pieces = example.split.split(/\s*(?:\/|\+)\s*/).filter(Boolean);
    return `<section class="panel foundation-visual" aria-label="${copy.visualPattern}"><p class="eyebrow">${copy.visualPattern}</p><div class="foundation-formula">${pieces.map((piece, index) => `${index ? `<span class="foundation-operator">+</span>` : ""}<span class="foundation-formula-part tone-${index % 3}">${escapeHtml(piece)}</span>`).join("")}</div><strong class="foundation-visual-result">${escapeHtml(example.text)}</strong><span>${escapeHtml(example.meaning)}</span></section>`;
  }
  if (lesson.track === "timeline") {
    const step = Number(lesson.id.match(/(\d+)$/)?.[1] || 21);
    const active = step === 23 ? "past" : step === 24 ? "next" : "now";
    return `<section class="panel foundation-visual foundation-time-visual" aria-label="${copy.visualPattern}"><p class="eyebrow">${copy.visualPattern}</p><div class="foundation-timeline"><div class="foundation-time-node ${active === "past" ? "active" : ""}"><span></span><strong>${copy.timelinePast}</strong></div><div class="foundation-time-node ${active === "now" ? "active" : ""}"><span></span><strong>${copy.timelineNow}</strong></div><div class="foundation-time-node ${active === "next" ? "active" : ""}"><span></span><strong>${copy.timelineNext}</strong></div></div><strong class="foundation-visual-result">${escapeHtml(lesson.examples[0].text)}</strong><span>${escapeHtml(lesson.examples[0].meaning)}</span></section>`;
  }
  return "";
}

function foundationsPage() {
  const copy = t();
  const foundations = course.foundations || { tracks: [], lessons: [] };
  if (activeFoundationLesson) return foundationLessonPage(activeFoundationLesson);
  const completed = new Set(foundationProgress());
  const selectedTrack = foundations.tracks.find(track => track.id === activeFoundationTrack) || foundations.tracks[0];
  const lessons = foundations.lessons.filter(lesson => lesson.track === selectedTrack?.id);
  return shell(`<section class="page"><p class="eyebrow">${copy.nav[4]}</p><h1 class="page-title">${copy.foundationsTitle}</h1><p class="page-subtitle">${copy.foundationsSub}</p>
    <div class="foundation-progress panel"><strong>${completed.size}/${foundations.lessons.length}</strong><span>${copy.foundationDone}</span><div class="foundation-progress-bar"><span style="width:${foundations.lessons.length ? completed.size / foundations.lessons.length * 100 : 0}%"></span></div></div>
    <div class="foundation-track-tabs">${foundations.tracks.map(track => `<button class="foundation-track ${selectedTrack?.id === track.id ? "active" : ""}" data-foundation-track="${track.id}"><span>${escapeHtml(track.title)}</span><small>${foundations.lessons.filter(lesson => lesson.track === track.id && completed.has(lesson.id)).length}/${foundations.lessons.filter(lesson => lesson.track === track.id).length}</small></button>`).join("")}</div>
    ${selectedTrack ? `<section class="section"><div class="section-heading"><div><h2>${escapeHtml(selectedTrack.title)}</h2><p class="fine-print">${escapeHtml(selectedTrack.description)}</p></div><span>${lessons.length} ${copy.foundationLessons}</span></div><div class="foundation-lesson-grid">${lessons.map((lesson, index) => `<button class="panel foundation-lesson-card ${completed.has(lesson.id) ? "done" : ""}" data-foundation-lesson="${lesson.id}"><span class="foundation-lesson-number">${completed.has(lesson.id) ? "✓" : index + 1}</span><span><strong>${escapeHtml(lesson.title)}</strong><small>${escapeHtml(lesson.goal)}</small></span></button>`).join("")}</div></section>` : ""}
  </section>`);
}

function foundationLessonPage(lessonId) {
  const copy = t();
  const foundations = course.foundations || { tracks: [], lessons: [] };
  const lesson = foundations.lessons.find(item => item.id === lessonId);
  if (!lesson) { activeFoundationLesson = null; return foundationsPage(); }
  const track = foundations.tracks.find(item => item.id === lesson.track);
  const done = foundationProgress().includes(lesson.id);
  const firstUnit = lesson.examples.map(example => foundationUnit(example.text)).find(Boolean);
  return shell(`<section class="page foundation-detail">
    <button class="button secondary small" data-action="foundation-back">← ${copy.foundationBack}</button>
    <div class="foundation-hero panel"><div><p class="eyebrow">${escapeHtml(track?.title || copy.nav[4])}</p><h1>${escapeHtml(lesson.title)}</h1><p>${escapeHtml(lesson.goal)}</p></div>${firstUnit?.image ? `<img src="${firstUnit.image}" alt="${copy.imageAlt}">` : `<div class="foundation-symbol">A·</div>`}</div>
    <div class="grid two foundation-explanation"><section class="panel"><p class="eyebrow">${copy.foundationGoal}</p><p>${escapeHtml(lesson.goal)}</p></section><section class="panel"><p class="eyebrow">${copy.foundationRule}</p><p>${escapeHtml(lesson.rule)}</p></section></div>
    ${foundationVisual(lesson)}
    <section class="section"><div class="section-heading"><h2>${copy.foundationExamples}</h2></div><div class="foundation-example-grid">${lesson.examples.map(example => {
      return `<article class="panel foundation-example"><strong>${escapeHtml(example.text)}</strong><div class="foundation-split">${escapeHtml(example.split)}</div><p>${escapeHtml(example.meaning)}</p><div class="card-actions"><button class="button secondary small" data-audio="${example.audioSlow || ""}" data-text="${escapeHtml(example.text)}" aria-label="${copy.slow}: ${escapeHtml(example.text)}">▶ ${copy.slow}</button><button class="button secondary small" data-audio="${example.audioNatural || ""}" data-text="${escapeHtml(example.text)}" aria-label="${copy.natural}: ${escapeHtml(example.text)}">▶ ${copy.natural}</button></div></article>`;
    }).join("")}</div></section>
    <section class="section panel foundation-speak"><p class="eyebrow">${copy.foundationSpeak}</p><h2>${escapeHtml(lesson.say)}</h2><p>${escapeHtml(lesson.sayMeaning)}</p><div class="card-actions"><button class="button" data-audio="${lesson.sayAudioNatural || ""}" data-text="${escapeHtml(lesson.say)}" aria-label="${copy.natural}: ${escapeHtml(lesson.say)}">▶ ${copy.natural}</button><button class="button secondary" data-audio="${lesson.sayAudioSlow || ""}" data-text="${escapeHtml(lesson.say)}" aria-label="${copy.slow}: ${escapeHtml(lesson.say)}">▶ ${copy.slow}</button><button class="button secondary" data-action="record-start">● ${copy.record}</button><button class="button secondary" data-action="record-stop" disabled>■ ${copy.stopRecording}</button></div><div id="recording-playback" class="recording-playback fine-print">${copy.recordingReady}</div></section>
    <div class="foundation-finish"><button class="button ${done ? "secondary" : ""}" data-action="foundation-complete" ${done ? "disabled" : ""}>${done ? "✓ " + copy.foundationCompleted : copy.foundationComplete}</button></div>
  </section>`);
}

function completeFoundationLesson() {
  if (!activeFoundationLesson || foundationProgress().includes(activeFoundationLesson)) return;
  audioController.cancel();
  cleanupFoundationRecording();
  foundationProgress().push(activeFoundationLesson);
  ensureDaily().spoken += 1;
  saveState();
  render();
}

async function startFoundationRecording() {
  const copy = t();
  const output = document.querySelector("#recording-playback");
  if (!navigator.mediaDevices?.getUserMedia || !("MediaRecorder" in window)) {
    if (output) output.textContent = copy.recordingUnavailable;
    return;
  }
  try {
    cleanupFoundationRecording();
    foundationStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    foundationChunks = [];
    const recorder = new MediaRecorder(foundationStream);
    foundationRecorder = recorder;
    recorder.ondataavailable = event => { if (event.data.size) foundationChunks.push(event.data); };
    recorder.onstop = () => {
      const blob = new Blob(foundationChunks, { type: recorder.mimeType || "audio/webm" });
      foundationRecordingUrl = URL.createObjectURL(blob);
      if (output?.isConnected) output.innerHTML = `<audio controls src="${foundationRecordingUrl}"></audio>`;
      foundationStream?.getTracks().forEach(track => track.stop());
      foundationStream = null;
      if (foundationRecorder === recorder) foundationRecorder = null;
    };
    recorder.start();
    document.querySelector("[data-action='record-start']")?.setAttribute("disabled", "");
    document.querySelector("[data-action='record-stop']")?.removeAttribute("disabled");
  } catch {
    if (output) output.textContent = copy.recordingUnavailable;
  }
}

function stopFoundationRecording() {
  if (foundationRecorder?.state === "recording") foundationRecorder.stop();
  document.querySelector("[data-action='record-stop']")?.setAttribute("disabled", "");
}

function cleanupFoundationRecording() {
  const recorder = foundationRecorder;
  foundationRecorder = null;
  if (recorder) {
    recorder.ondataavailable = null;
    recorder.onstop = null;
    if (recorder.state === "recording") recorder.stop();
  }
  foundationStream?.getTracks().forEach(track => track.stop());
  foundationStream = null;
  foundationChunks = [];
  if (foundationRecordingUrl) URL.revokeObjectURL(foundationRecordingUrl);
  foundationRecordingUrl = "";
}

function situationsPage() {
  const copy = t();
  if (activeScene) return scenePage(activeScene);
  return shell(`<section class="page"><p class="eyebrow">${course.scenes.length} ${copy.scenes}</p><h1 class="page-title">${copy.situationsTitle}</h1><p class="page-subtitle">${copy.situationsSub}</p><div class="scene-grid">${course.scenes.map(scene => `<button type="button" class="panel scene-card" data-scene="${scene.id}"><img src="${scene.image}" alt="" onerror="this.style.display='none'"><span class="scene-card-body"><span class="scene-card-title">${escapeHtml(scene.title)}</span><span class="scene-card-meta">${scene.dialogue.length} ${copy.lines}</span></span></button>`).join("")}</div></section>`);
}

function scenePage(scene) {
  const copy = t();
  const hasSlow = scene.dialogue.every(line => line.audioSlow);
  return shell(`<section class="page"><button class="button secondary small" data-action="scene-back">← ${copy.back}</button><div class="section-heading" style="margin-top:24px"><div><p class="eyebrow">${copy.situationsTitle}</p><h1 class="page-title">${escapeHtml(scene.title)}</h1></div></div><div class="toolbar"><button class="button" data-action="play-scene" data-speed="natural">▶ ${hasSlow ? copy.natural : copy.playAll}</button>${hasSlow ? `<button class="button secondary" data-action="play-scene" data-speed="slow">▶ ${copy.slow}</button>` : ""}<button class="button secondary" data-action="toggle-translations">${translationsVisible ? copy.hideTranslations : copy.showTranslations}</button><button class="button secondary" data-action="mark-listened">${copy.markListened}</button></div><div class="panel dialogue">${scene.dialogue.map(line => `<div class="line"><p>${escapeHtml(line.text)}</p>${translationsVisible ? `<p class="line-translation">${escapeHtml(line.translation)}</p>` : ""}<div class="line-tools"><button class="button secondary small" data-audio="${line.audio}" data-text="${escapeHtml(line.text)}" aria-label="${line.audioSlow ? copy.natural : copy.listen}: ${escapeHtml(line.text)}">▶${line.audioSlow ? ` ${copy.natural}` : ""}</button>${line.audioSlow ? `<button class="button secondary small" data-audio="${line.audioSlow}" data-text="${escapeHtml(line.text)}" aria-label="${copy.slow}: ${escapeHtml(line.text)}">▶ ${copy.slow}</button>` : ""}</div></div>`).join("")}</div></section>`);
}

async function playScene(event) {
  const button = event?.currentTarget;
  const speed = button?.dataset.speed || "natural";
  const idleLabel = speed === "slow" ? t().slow : activeScene?.dialogue.every(line => line.audioSlow) ? t().natural : t().playAll;
  if (audioController.isSequenceActive) {
    audioController.cancel();
    if (button) button.textContent = `▶ ${idleLabel}`;
    return;
  }
  const scene = activeScene;
  if (!scene) return;
  clearAudioUnavailable(button);
  if (button) button.textContent = `■ ${t().stopAudio}`;
  const completed = await audioController.playSequence(
    scene.dialogue.map(line => ({ path: speed === "slow" ? line.audioSlow : line.audio, context: { button } })),
    { gapMs: 240 }
  );
  if (button?.isConnected) button.textContent = `▶ ${idleLabel}`;
  if (completed && activeScene === scene) markSceneListened();
}

function markSceneListened() {
  const list = state.listenedScenes[targetLanguage()];
  if (!list.includes(activeScene.id)) {
    list.push(activeScene.id);
    ensureDaily().listened += 1;
  }
  saveState();
  render();
}

function grammarPage() {
  const copy = t();
  const grammar = course.grammar;
  return shell(`<section class="page"><p class="eyebrow">${copy.nav[6]}</p><h1 class="page-title">${copy.grammarTitle}</h1><p class="page-subtitle">${copy.grammarSub}</p>
    ${grammarSection(copy.sentenceRules, grammar.sentence || [])}
    ${grammarSection(copy.tenses, grammar.tenses || [])}
    ${grammarSection(copy.irregulars, grammar.irregulars || [])}
  </section>`);
}

function grammarSection(title, items) {
  const copy = t();
  return `<section class="section"><div class="section-heading"><h2>${title}</h2><span>${items.length}</span></div><div class="grammar-list">${items.map(item => {
    const heading = item.topic || item.tense || item.verb || item.title || item.base || "";
    const formLine = item.pastFirst || item.pastThird
      ? `${copy.irregularBase}: ${item.base || ""} · ${copy.irregularPast}: ${item.pastFirst || ""} · ${copy.irregularThird}: ${item.pastThird || ""}`
      : item.past || item.participle
        ? `${copy.irregularBase}: ${item.base || ""} · ${copy.irregularPast}: ${item.past || ""} · ${copy.irregularThird}: ${item.participle || ""}`
        : "";
    const details = [item.rule, item.when, item.use, item.forms, formLine, item.meaning, item.affirmative, item.negative, item.question, item.markers, item.note].filter(Boolean);
    return `<details class="panel grammar-item"><summary>${escapeHtml(heading)}</summary><div class="grammar-body">${details.map(detail => `<div>${escapeHtml(detail)}</div>`).join("")}${item.example ? `<div class="grammar-example"><strong>${escapeHtml(item.example)}</strong>${item.translation ? `<div>${escapeHtml(item.translation)}</div>` : ""}</div>` : ""}</div></details>`;
  }).join("")}</div></section>`;
}

function tutorPage() {
  const copy = t();
  const connected = Boolean(sessionStorage.getItem("denis-ai-key") && state.ai.endpoint && state.ai.model);
  const modeOptions = [
    ["conversation", copy.modeConversation],
    ["roleplay", copy.modeRoleplay],
    ["review", copy.modeReview],
    ["explanation", copy.modeExplanation],
    ["correction", copy.modeCorrection],
  ];
  const registerOptions = [["neutral", copy.registerNeutral], ["casual", copy.registerCasual], ["polite", copy.registerPolite]];
  return shell(`<section class="page"><p class="eyebrow">${copy.nav[7]}</p><h1 class="page-title">${copy.tutorTitle}</h1><p class="page-subtitle">${copy.tutorSub}</p>
    <div class="grid two"><div class="panel"><h2>${copy.offlineTitle}</h2><p>${copy.offlineText}</p><button class="button" data-action="offline-practice">${copy.startOffline}</button></div><div class="panel"><h2>${copy.connectAi}</h2><p class="fine-print">${copy.aiNotice}</p>${connected ? `<button class="button secondary" data-action="disconnect-ai">${copy.disconnect}</button>` : `<button class="button secondary" data-view="Settings">${copy.connectAi}</button>`}</div></div>
    <section class="section panel"><div class="tutor-controls"><label class="label">${copy.tutorMode}<select class="field" id="tutor-mode">${modeOptions.map(([value, label]) => `<option value="${value}"${tutorMode === value ? " selected" : ""}>${label}</option>`).join("")}</select></label><label class="label">${copy.tutorRegister}<select class="field" id="tutor-register">${registerOptions.map(([value, label]) => `<option value="${value}"${tutorRegister === value ? " selected" : ""}>${label}</option>`).join("")}</select></label><label class="label tutor-scenario">${copy.tutorScenario}<input class="field" id="tutor-scenario" maxlength="240" value="${escapeHtml(tutorScenario)}" placeholder="${copy.tutorScenarioPlaceholder}"></label></div><div class="chat" id="chat" aria-live="polite">${chat.length ? chat.map(message => tutorMessageHtml(message, copy)).join("") : `<div class="fine-print">${connected ? copy.typeTarget : copy.offlineText}</div>`}${tutorFlight.pending ? `<div class="fine-print tutor-working">${copy.tutorWorking}</div>` : ""}</div><form class="chat-form" id="chat-form"><input class="field" id="chat-input" maxlength="800" autocomplete="off" placeholder="${copy.typeTarget}"${tutorFlight.pending ? " disabled" : ""}><div class="tutor-submit"><button class="button" type="submit"${tutorFlight.pending ? " disabled" : ""}>${copy.send}</button>${tutorFlight.pending ? `<button class="button secondary" type="button" data-action="cancel-tutor">${copy.cancelRequest}</button>` : ""}</div></form></section>
  </section>`);
}

function tutorMessageHtml(message, copy) {
  const result = message.result;
  if (message.role === "user" || !result) return `<div class="chat-message ${message.role === "user" ? "user" : ""}">${escapeHtml(message.content)}</div>`;
  return `<div class="chat-message tutor-reply"><div>${escapeHtml(result.reply)}</div>${result.correction ? `<div class="tutor-detail"><strong>${copy.correctionLabel}</strong><div>${escapeHtml(result.correction.recast)}</div><small>${escapeHtml(result.correction.note)}</small></div>` : ""}${result.retryCue ? `<div class="tutor-detail"><strong>${copy.retryLabel}</strong><div>${escapeHtml(result.retryCue)}</div></div>` : ""}${result.rescueTranslation ? `<div class="tutor-detail"><strong>${copy.rescueLabel}</strong><div>${escapeHtml(result.rescueTranslation)}</div></div>` : ""}${result.newVocabulary ? `<div class="tutor-detail"><strong>${copy.vocabularyLabel}</strong><div>${escapeHtml(result.newVocabulary.term)} · ${escapeHtml(result.newVocabulary.meaning)} · ${escapeHtml(result.newVocabulary.register)}</div></div>` : ""}${result.fallback ? `<small class="tutor-fallback">${copy.tutorFallback}</small>` : ""}</div>`;
}

function offlinePractice() {
  const scene = course.scenes[0];
  chat = scene.dialogue.slice(0, 6).map((line, index) => ({ role: index % 2 ? "user" : "assistant", content: line.text }));
  ensureDaily().spoken += 1;
  saveState();
  render();
  scene.dialogue.slice(0, 1).forEach(line => playAudio(line.audio, line.text));
}

async function sendTutor(text) {
  const copy = t();
  const key = sessionStorage.getItem("denis-ai-key");
  if (!key || !state.ai.endpoint || !state.ai.model) {
    alert(copy.aiMissing);
    return;
  }
  if (tutorFlight.pending) return;
  const userText = DenisTutorRuntime.cleanText(text);
  if (!userText) return;
  chat.push({ role: "user", content: userText });
  chat = chat.slice(-24);
  render();
  const learnedWords = allUnits().filter(unit => progress()[unit.id]).map(unit => `${unit.word} (${unit.meaning})`).slice(-120);
  const focusWords = learnedWords.slice(-20);
  const directionSnapshot = state.direction;
  const system = DenisTutorPrompts.buildSystemPrompt({
    direction: directionSnapshot,
    mode: tutorMode,
    register: tutorRegister,
    scenario: tutorScenario,
    learnedVocabulary: learnedWords,
    focusVocabulary: focusWords,
    structured: true,
  });
  try {
    const request = tutorFlight.run(signal => DenisTutorRuntime.requestTutor({ endpoint: state.ai.endpoint, model: state.ai.model, key, systemPrompt: system, messages: chat, signal }));
    render();
    const outcome = await request;
    if (outcome?.skipped || state.direction !== directionSnapshot) return;
    const result = DenisTutorRuntime.parseTutorContent(outcome.content, { direction: directionSnapshot, sourceLocale: sourceLanguage() === "pt" ? "pt-BR" : "en-US" });
    chat.push({ role: "assistant", content: result.reply, result });
    chat = chat.slice(-24);
    ensureDaily().spoken += 1;
    saveState();
  } catch (error) {
    if (!String(error?.message || error).includes("navigation") && error?.name !== "AbortError") alert(error?.message === "timeout" ? copy.aiTimeout : copy.aiError);
  } finally {
    if (view === "Tutor") render();
  }
}

function settingsPage() {
  const copy = t();
  return shell(`<section class="page"><p class="eyebrow">${copy.nav[8]}</p><h1 class="page-title">${copy.settingsTitle}</h1><p class="page-subtitle">${copy.settingsSub}</p><div class="settings-grid">
    <section class="panel"><h2>${copy.languageTitle}</h2><p>${copy.direction}</p><label class="label">${copy.dailyGoal}<input class="field" id="daily-goal" type="number" min="1" max="50" value="${state.dailyGoal}"></label><div class="card-actions"><button class="button secondary" data-action="change-direction">${copy.changeDirection}</button></div></section>
    <section class="panel"><h2>${copy.progressTitle}</h2><div class="form-stack"><button class="button secondary" data-action="export">${copy.export}</button><label class="button secondary" for="import-file">${copy.import}</label><input id="import-file" type="file" accept="application/json" hidden><button class="button coral" data-action="reset">${copy.reset}</button></div></section>
    <section class="panel"><h2>${copy.connectAi}</h2><p class="notice">${copy.aiNotice}</p><div class="form-stack"><label class="label">${copy.endpoint}<input class="field" id="ai-endpoint" type="url" value="${escapeHtml(state.ai.endpoint)}" placeholder="https://your-service.example/v1/chat/completions"></label><label class="label">${copy.model}<input class="field" id="ai-model" value="${escapeHtml(state.ai.model)}" placeholder="model-name"></label><label class="label">${copy.apiKey}<input class="field" id="ai-key" type="password" autocomplete="off" placeholder="••••••••"></label><button class="button" data-action="save-ai">${copy.saveSession}</button></div></section>
    <section class="panel"><h2>${copy.privacyTitle}</h2><p>${copy.privacyText}</p><h2>${copy.offlineTitle}</h2><p>${copy.offlineContract}</p><h2>${copy.authorTitle}</h2><p>${authorLink()}. ${copy.authorText}</p><p class="fine-print">${copy.installHint}</p></section>
  </div></section>`);
}

function render() {
  const root = document.getElementById("app");
  if (!state.direction) {
    root.innerHTML = onboarding();
    bind();
    return;
  }
  if (!course) return;
  const pages = { Today: todayPage, Learn: learnPage, Review: reviewPage, Words: wordsPage, Foundations: foundationsPage, Situations: situationsPage, Grammar: grammarPage, Tutor: tutorPage, Settings: settingsPage };
  root.innerHTML = pages[view]();
  document.documentElement.lang = sourceLanguage() === "pt" ? "pt-BR" : "en";
  bind();
}

function bind() {
  document.querySelectorAll("[data-direction]").forEach(button => button.addEventListener("click", async () => {
    state.direction = button.dataset.direction;
    resetTransientUi();
    saveState();
    await loadCourse();
    render();
  }));
  document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
  document.querySelector("[data-action='home']")?.addEventListener("click", () => setView("Today"));
  document.querySelectorAll("[data-track]").forEach(button => button.addEventListener("click", () => { activeTrack = button.dataset.track; reveal = false; delayed.clear(); render(); }));
  document.querySelector("[data-action='reveal']")?.addEventListener("click", () => { reveal = true; render(); });
  document.querySelector("[data-action='learn-known']")?.addEventListener("click", learnCurrent);
  document.querySelector("[data-action='learn-later']")?.addEventListener("click", delayCurrent);
  document.querySelectorAll("[data-review]").forEach(button => button.addEventListener("click", () => gradeReview(button.dataset.review)));
  document.querySelectorAll("[data-audio]").forEach(button => button.addEventListener("click", () => playAudio(button.dataset.audio, button.dataset.text, Number(button.dataset.rate) || 1, button)));
  document.querySelectorAll("[data-toggle-known]").forEach(button => button.addEventListener("click", () => toggleKnown(button.dataset.toggleKnown)));
  document.querySelectorAll("[data-foundation-track]").forEach(button => button.addEventListener("click", () => { audioController.cancel(); cleanupFoundationRecording(); activeFoundationTrack = button.dataset.foundationTrack; activeFoundationLesson = null; render(); }));
  document.querySelectorAll("[data-foundation-lesson]").forEach(button => button.addEventListener("click", () => { audioController.cancel(); cleanupFoundationRecording(); activeFoundationLesson = button.dataset.foundationLesson; render(); }));
  document.querySelector("[data-action='foundation-back']")?.addEventListener("click", () => { audioController.cancel(); cleanupFoundationRecording(); activeFoundationLesson = null; render(); });
  document.querySelector("[data-action='foundation-complete']")?.addEventListener("click", completeFoundationLesson);
  document.querySelector("[data-action='record-start']")?.addEventListener("click", startFoundationRecording);
  document.querySelector("[data-action='record-stop']")?.addEventListener("click", stopFoundationRecording);
  document.querySelectorAll("[data-scene]").forEach(card => card.addEventListener("click", () => { audioController.cancel(); activeScene = course.scenes.find(scene => scene.id === card.dataset.scene); render(); }));
  document.querySelector("[data-action='scene-back']")?.addEventListener("click", () => { audioController.cancel(); activeScene = null; render(); });
  document.querySelector("[data-action='toggle-translations']")?.addEventListener("click", () => { translationsVisible = !translationsVisible; render(); });
  document.querySelectorAll("[data-action='play-scene']").forEach(button => button.addEventListener("click", playScene));
  document.querySelector("[data-action='mark-listened']")?.addEventListener("click", markSceneListened);
  document.querySelector("[data-action='offline-practice']")?.addEventListener("click", offlinePractice);
  document.querySelector("[data-action='cancel-tutor']")?.addEventListener("click", () => tutorFlight.cancel("cancelled"));
  document.querySelector("[data-action='load-more-words']")?.addEventListener("click", () => { wordVisualLimit += 48; render(); });
  document.querySelector("[data-action='disconnect-ai']")?.addEventListener("click", () => { sessionStorage.removeItem("denis-ai-key"); chat = []; render(); });
  document.querySelector("[data-action='save-ai']")?.addEventListener("click", saveAi);
  document.querySelector("[data-action='change-direction']")?.addEventListener("click", () => { state.direction = null; course = null; resetTransientUi(); saveState(); render(); });
  document.querySelector("[data-action='export']")?.addEventListener("click", exportProgress);
  document.querySelector("[data-action='reset']")?.addEventListener("click", resetProgress);
  document.querySelector("#import-file")?.addEventListener("change", importProgress);
  document.querySelector("#daily-goal")?.addEventListener("change", event => { state.dailyGoal = Math.max(1, Math.min(50, Number(event.target.value) || 10)); saveState(); });
  document.querySelector("#word-search")?.addEventListener("input", event => { wordSearch = event.target.value; wordVisualLimit = 48; clearTimeout(window.wordTimer); window.wordTimer = setTimeout(render, 160); });
  document.querySelector("#word-track")?.addEventListener("change", event => { wordTrack = event.target.value; wordVisualLimit = 48; render(); });
  document.querySelector("#word-status")?.addEventListener("change", event => { wordStatus = event.target.value; wordVisualLimit = 48; render(); });
  document.querySelector("#chat-form")?.addEventListener("submit", event => { event.preventDefault(); const input = document.querySelector("#chat-input"); const text = input.value.trim(); if (text) sendTutor(text); });
  document.querySelector("#tutor-mode")?.addEventListener("change", event => { tutorMode = event.target.value; });
  document.querySelector("#tutor-register")?.addEventListener("change", event => { tutorRegister = event.target.value; });
  document.querySelector("#tutor-scenario")?.addEventListener("input", event => { tutorScenario = DenisTutorPrompts.cleanContextValue(event.target.value, 240); });
}

function saveAi() {
  const endpoint = document.querySelector("#ai-endpoint").value.trim().slice(0, 500);
  const model = document.querySelector("#ai-model").value.trim().slice(0, 120);
  const validatedEndpoint = DenisTutorRuntime.validateEndpoint(endpoint);
  if (!validatedEndpoint || !model) {
    alert(t().aiError);
    return;
  }
  state.ai.endpoint = validatedEndpoint;
  state.ai.model = model;
  const key = document.querySelector("#ai-key").value.trim();
  if (key) sessionStorage.setItem("denis-ai-key", key);
  saveState();
  setView("Tutor");
}

function exportProgress() {
  const blob = new Blob([JSON.stringify({ app: APP_KEY, exportedAt: new Date().toISOString(), state }, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `english-portuguese-progress-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function importProgress(event) {
  const reader = new FileReader();
  reader.onload = async () => {
    const priorState = state;
    const priorCourse = course;
    try {
      const payload = JSON.parse(reader.result);
      if (payload.app !== APP_KEY || !payload.state) throw new Error("invalid");
      const rawCount = stateRecordCount(payload.state);
      const normalized = normalizeState(migrateState(payload.state));
      let discarded = Math.max(0, rawCount - stateRecordCount(normalized));
      state = normalized;
      resetTransientUi();
      course = null;
      discarded += await loadCourse();
      saveState();
      alert(`${t().importSummary}: ${discarded}.`);
      render();
    } catch {
      state = priorState;
      course = priorCourse;
      alert(t().importError);
      render();
    }
  };
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > MAX_IMPORT_BYTES) {
    alert(t().importError);
    event.target.value = "";
    return;
  }
  reader.readAsText(file);
}

function resetProgress() {
  if (!confirm(t().confirmReset)) return;
  state.progress[targetLanguage()] = {};
  state.foundationProgress[targetLanguage()] = [];
  state.listenedScenes[targetLanguage()] = [];
  Object.keys(state.daily).filter(key => key.startsWith(`${targetLanguage()}:`)).forEach(key => delete state.daily[key]);
  saveState();
  setView("Today");
}

function playAudio(path, label, rate = 1, button = null) {
  clearAudioUnavailable(button);
  return audioController.play(path, { rate, context: { label, button } });
}

async function boot() {
  window.addEventListener("pagehide", () => { audioController.cancel(); cleanupFoundationRecording(); tutorFlight.cancel("navigation"); });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      audioController.cancel();
      cleanupFoundationRecording();
      tutorFlight.cancel("navigation");
    }
  });
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (sessionStorage.getItem("denis-en-pt-sw-refresh") === "1") return;
      sessionStorage.setItem("denis-en-pt-sw-refresh", "1");
      location.reload();
    });
    navigator.serviceWorker.register("sw.js").then(() => {
      sessionStorage.removeItem("denis-en-pt-sw-refresh");
    }).catch(() => {});
  }
  if (state.direction) await loadCourse();
  render();
}

boot().catch(error => {
  document.getElementById("app").innerHTML = `<div class="loading">${escapeHtml(error.message)}</div>`;
});
