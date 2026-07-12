const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

async function main() {
  const store = new Map();
  let failWrites = false;
  let trackStops = 0;
  let recorderStops = 0;
  let revokedUrls = 0;
  const root = { innerHTML: "" };
  const storage = {
    getItem: key => store.get(key) || null,
    setItem: (key, value) => {
      if (failWrites) throw new Error("QuotaExceededError");
      store.set(key, value);
    },
    removeItem: key => store.delete(key),
  };
  const document = {
    documentElement: { lang: "en" },
    visibilityState: "visible",
    getElementById: () => root,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
  };
  class RuntimeURL extends URL {}
  RuntimeURL.revokeObjectURL = () => { revokedUrls += 1; };
  const sandbox = {
    console,
    URL: RuntimeURL,
    Blob,
    FileReader: function () {},
    localStorage: storage,
    sessionStorage: storage,
    navigator: {},
    location: { protocol: "file:" },
    document,
    alert: () => {},
    confirm: () => true,
    fetch: async () => { throw new Error("unused"); },
    setTimeout,
    clearTimeout,
    window: { addEventListener: () => {}, scrollTo: () => {}, setTimeout, clearTimeout },
    createMediaController: () => ({ cancel: () => {}, play: async () => true, playSequence: async () => true, isSequenceActive: false }),
    DenisTutorRuntime: require("../tutor-runtime.js"),
  };
  sandbox.window.window = sandbox.window;
  vm.createContext(sandbox);
  const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
  vm.runInContext(source, sandbox, { filename: "app.js" });
  await Promise.resolve();

  assert.equal(vm.runInContext("migrateState({direction:null}).schemaVersion", sandbox), 2);
  assert.throws(() => vm.runInContext("migrateState({schemaVersion:99,direction:null})", sandbox));
  assert.equal(vm.runInContext("isValidDateKey('2024-02-29')", sandbox), true);
  assert.equal(vm.runInContext("isValidDateKey('2026-02-29')", sandbox), false);
  assert.equal(vm.runInContext("isValidDateKey('2026-99-99')", sandbox), false);

  const normalized = vm.runInContext(`normalizeState({
    schemaVersion: 2,
    direction: 'en-pt',
    progress: {en:{},pt:{ghost:{stage:0,due:'2026-99-99',learnedAt:'2026-01-01'}}},
    foundationProgress: {en:[],pt:['pt-f01','pt-f01']},
    listenedScenes: {en:[],pt:['pt:scene:1','pt:scene:1']},
    daily: {'pt:2026-99-99':{learned:4}},
    ai: {endpoint:'x'.repeat(800),model:'y'.repeat(300)}
  })`, sandbox);
  assert.deepEqual(Object.keys(normalized.progress.pt), []);
  assert.deepEqual(Array.from(normalized.foundationProgress.pt), ["pt-f01"]);
  assert.deepEqual(Array.from(normalized.listenedScenes.pt), ["pt:scene:1"]);
  assert.deepEqual(Object.keys(normalized.daily), []);
  assert.equal(normalized.ai.endpoint.length, 500);
  assert.equal(normalized.ai.model.length, 120);

  const discarded = vm.runInContext(`(() => {
    state = normalizeState({schemaVersion:2,direction:'en-pt',progress:{en:{},pt:{ghost:{stage:0,due:'2026-07-12',learnedAt:'2026-07-12'},real:{stage:0,due:'2026-07-12',learnedAt:'2026-07-12'}}},foundationProgress:{en:[],pt:['ghost-lesson','pt-f01']},listenedScenes:{en:[],pt:['ghost-scene','pt:scene:1']},daily:{},ai:{}});
    course = {tracks:{core:[{id:'real'}]},foundations:{lessons:[{id:'pt-f01'}]},scenes:[{id:'pt:scene:1'}]};
    return reconcileCurrentState();
  })()`, sandbox);
  assert.equal(discarded, 3);
  assert.deepEqual(Array.from(vm.runInContext("Object.keys(state.progress.pt)", sandbox)), ["real"]);

  sandbox.testStream = { getTracks: () => [{ stop: () => { trackStops += 1; } }] };
  sandbox.testRecorder = { state: "recording", ondataavailable: () => {}, onstop: () => {}, stop: () => { recorderStops += 1; } };
  vm.runInContext("foundationStream=testStream; foundationRecorder=testRecorder; foundationRecordingUrl='blob:test'; cleanupFoundationRecording()", sandbox);
  assert.equal(trackStops, 1);
  assert.equal(recorderStops, 1);
  assert.equal(revokedUrls, 1);
  assert.equal(vm.runInContext("foundationStream === null && foundationRecorder === null && foundationRecordingUrl === ''", sandbox), true);

  const tutorHtml = vm.runInContext(`tutorMessageHtml({role:'assistant',content:'safe',result:{reply:'Olá <b>',correction:{original:'x',recast:'recast',note:'note'},retryCue:'retry',rescueTranslation:'rescue',newVocabulary:{term:'term',meaning:'meaning',register:'neutral'},fallback:true}}, COPY.en)`, sandbox);
  assert.match(tutorHtml, /Correction/);
  assert.match(tutorHtml, /Try again/);
  assert.match(tutorHtml, /Quick translation/);
  assert.match(tutorHtml, /New vocabulary/);
  assert.match(tutorHtml, /safe plain-text reply/);
  assert.match(tutorHtml, /Olá &lt;b&gt;/);
  assert.doesNotMatch(tutorHtml, /Olá <b>/);

  vm.runInContext("state = defaultState(); lastSavedSerialized = JSON.stringify(state)", sandbox);
  vm.runInContext("state.dailyGoal = 17", sandbox);
  failWrites = true;
  assert.equal(vm.runInContext("saveState()", sandbox), false);
  assert.equal(vm.runInContext("state.dailyGoal", sandbox), 10);
  assert.match(vm.runInContext("persistenceNotice", sandbox), /could not be saved/);
  console.log("PASS: state migration, bounds, structured Tutor rendering and write recovery");
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
