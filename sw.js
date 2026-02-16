const CACHE_NAME = 'muscleforge-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/data/exercises.js',
  '/data/foods.js',
  '/data/programs.js',
  '/data/references.js',
  '/data/recipes.js',
  '/js/calculators.js',
  '/manifest.json'
];

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first for static assets, network-first for external
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Cache-first for same-origin static assets
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        });
      })
    );
  } else {
    // Network-first for external resources (fonts, CDN)
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
