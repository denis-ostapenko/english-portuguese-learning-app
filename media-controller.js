(function (global) {
  function createMediaController(options = {}) {
    const AudioConstructor = options.AudioConstructor || global.Audio;
    const onUnavailable = options.onUnavailable || (() => {});
    let active = null;
    let generation = 0;
    let sequenceActive = false;

    function releaseActive(result = false) {
      if (!active) return;
      const current = active;
      active = null;
      current.audio.onended = null;
      current.audio.onerror = null;
      if (typeof current.audio.pause === "function") current.audio.pause();
      current.resolve(result);
    }

    function cancel() {
      generation += 1;
      sequenceActive = false;
      releaseActive(false);
    }

    function playClip(path, rate, token, context) {
      if (token !== generation) return Promise.resolve(false);
      if (!path) {
        onUnavailable(context, "missing");
        return Promise.resolve(false);
      }
      releaseActive(false);
      return new Promise(resolve => {
        const audio = new AudioConstructor(path);
        let settled = false;
        const finish = (result, reportFailure = true) => {
          if (settled) return;
          settled = true;
          if (active?.audio === audio) active = null;
          audio.onended = null;
          audio.onerror = null;
          if (!result && reportFailure) onUnavailable(context, "failed");
          resolve(result && token === generation);
        };
        active = { audio, resolve: result => finish(result, false) };
        audio.playbackRate = rate;
        audio.onended = () => finish(true);
        audio.onerror = () => finish(false);
        let playResult;
        try {
          playResult = audio.play();
        } catch {
          finish(false);
          return;
        }
        if (playResult?.catch) playResult.catch(() => finish(false));
      });
    }

    async function play(path, optionsForClip = {}) {
      cancel();
      const token = generation;
      return playClip(path, optionsForClip.rate || 1, token, optionsForClip.context || null);
    }

    async function playSequence(items, optionsForSequence = {}) {
      cancel();
      const token = generation;
      sequenceActive = true;
      for (const item of items) {
        const played = await playClip(item.path, item.rate || 1, token, item.context || null);
        if (!played || token !== generation) {
          sequenceActive = false;
          return false;
        }
        if (optionsForSequence.gapMs) {
          await new Promise(resolve => global.setTimeout(resolve, optionsForSequence.gapMs));
          if (token !== generation) {
            sequenceActive = false;
            return false;
          }
        }
      }
      sequenceActive = false;
      return token === generation;
    }

    return {
      cancel,
      play,
      playSequence,
      get isPlaying() { return Boolean(active); },
      get isSequenceActive() { return sequenceActive; },
    };
  }

  global.createMediaController = createMediaController;
  if (typeof module !== "undefined" && module.exports) module.exports = { createMediaController };
}(typeof globalThis !== "undefined" ? globalThis : this));
