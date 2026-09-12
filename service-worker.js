const CACHE_NAME = 'vigilia-abisal-v3.0.1-omega';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './campaign-core.js',
  './campaign-epilogues.js',
  './campaign-exp-1.js',
  './campaign-exp-2.js',
  './campaign-exp-3.js',
  './campaign-exp-4.js',
  './campaign-crosslinks.js',
  './campaign-meta-1.js',
  './campaign-meta-2.js',
  './app.js',
  './v3-content.js',
  './v3-engine-1.js',
  './v3-engine-2.js',
  './v3-engine-3.js',
  './v3-engine-4.js',
  './manifest.webmanifest',
  './assets/icon.svg',
  './assets/icon-192.png',
  './assets/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  const request = event.request;
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === 'navigate') return caches.match('./index.html');
        throw new Error('Recurso no disponible offline');
      })
  );
});
