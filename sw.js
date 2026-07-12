const APP_CACHE_PREFIX = "denis-en-pt-";
const SHELL_CACHE_PREFIX = `${APP_CACHE_PREFIX}shell-`;
const SHELL_CACHE = `${SHELL_CACHE_PREFIX}v0.91`;
const MEDIA_CACHE = `${APP_CACHE_PREFIX}media-v1`;
const SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=0.91",
  "./media-controller.js?v=0.91",
  "./tutor-prompts.js?v=0.91",
  "./tutor-runtime.js?v=0.91",
  "./app.js?v=0.91",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./data/en.json",
  "./data/pt.json"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(SHELL_CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith(SHELL_CACHE_PREFIX) && key !== SHELL_CACHE).map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});

function cacheResponse(event, cacheName, response) {
  if (!response.ok || new URL(event.request.url).origin !== self.location.origin) return response;
  const write = caches.open(cacheName).then(cache => cache.put(event.request, response.clone()));
  event.waitUntil(write);
  return response;
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const isMedia = /\/(audio|images)\//.test(url.pathname);
  if (isMedia) {
    event.respondWith(caches.open(MEDIA_CACHE).then(cache => cache.match(event.request).then(cached => cached || fetch(event.request).then(response => cacheResponse(event, MEDIA_CACHE, response)))));
    return;
  }
  event.respondWith(fetch(event.request)
    .then(response => cacheResponse(event, SHELL_CACHE, response))
    .catch(() => caches.match(event.request).then(cached => cached || caches.match("./index.html"))));
});
