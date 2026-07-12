const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

async function main() {
  const handlers = {};
  const deleted = [];
  let claimed = false;
  const sandbox = {
    URL,
    fetch: async () => { throw new Error("unused"); },
    caches: {
      keys: async () => ["foreign-cache", "denis-en-pt-shell-v11", "denis-en-pt-shell-v12", "denis-en-pt-media-v1"],
      delete: async key => { deleted.push(key); return true; },
      open: async () => ({ addAll: async () => {}, match: async () => null, put: async () => {} }),
      match: async () => null,
    },
    self: {
      location: { origin: "https://example.test" },
      clients: { claim: async () => { claimed = true; } },
      skipWaiting: () => {},
      addEventListener: (name, handler) => { handlers[name] = handler; },
    },
  };
  const source = fs.readFileSync(path.join(__dirname, "..", "sw.js"), "utf8");
  vm.runInNewContext(source, sandbox, { filename: "sw.js" });
  let activation;
  handlers.activate({ waitUntil: promise => { activation = promise; } });
  await activation;
  assert.deepEqual(deleted, ["denis-en-pt-shell-v11", "denis-en-pt-shell-v12"]);
  assert.equal(claimed, true);
  assert.equal(deleted.includes("foreign-cache"), false);
  assert.equal(deleted.includes("denis-en-pt-media-v1"), false);
  console.log("PASS: service worker preserves foreign and compatible media caches");
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
