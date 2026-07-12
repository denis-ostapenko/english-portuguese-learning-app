const assert = require("node:assert/strict");
const { createMediaController } = require("../media-controller.js");

class MockAudio {
  static instances = [];

  constructor(path) {
    this.path = path;
    this.playbackRate = 1;
    this.paused = false;
    MockAudio.instances.push(this);
  }

  play() {
    return Promise.resolve();
  }

  pause() {
    this.paused = true;
  }
}

async function main() {
  const unavailable = [];
  const controller = createMediaController({
    AudioConstructor: MockAudio,
    onUnavailable: (context, reason) => unavailable.push({ context, reason }),
  });

  const first = controller.play("first.mp3", { context: { id: "first" } });
  assert.equal(controller.isPlaying, true);
  const second = controller.play("second.mp3", { context: { id: "second" } });
  assert.equal(await first, false);
  assert.equal(MockAudio.instances[0].paused, true);
  assert.equal(unavailable.length, 0);
  MockAudio.instances[1].onended();
  assert.equal(await second, true);
  assert.equal(controller.isPlaying, false);

  assert.equal(await controller.play("", { context: { id: "missing" } }), false);
  assert.deepEqual(unavailable.at(-1), { context: { id: "missing" }, reason: "missing" });

  const failed = controller.play("failed.mp3", { context: { id: "failed" } });
  MockAudio.instances.at(-1).onerror();
  assert.equal(await failed, false);
  assert.deepEqual(unavailable.at(-1), { context: { id: "failed" }, reason: "failed" });

  const sequence = controller.playSequence([
    { path: "one.mp3", context: { id: "one" } },
    { path: "two.mp3", context: { id: "two" } },
  ]);
  MockAudio.instances.at(-1).onended();
  await Promise.resolve();
  assert.equal(MockAudio.instances.at(-1).path, "two.mp3");
  controller.cancel();
  assert.equal(await sequence, false);
  assert.equal(controller.isSequenceActive, false);

  console.log("PASS: media controller cancellation, failure and sequence ownership");
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
