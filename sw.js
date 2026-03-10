const CACHE_NAME = 'muscleforge-v3';
const STATIC_ASSETS = [
  '/data/exercises.js',
  '/data/foods.js',
  '/data/programs.js',
  '/data/references.js',
  '/data/recipes.js',
  '/js/calculators.js',
  '/manifest.json'
];

// Install: cache only truly static data files (not index.html)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: wipe all old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch strategy:
//   index.html  → network-first (always get latest, fall back to cache)
//   data/*.js   → cache-first  (static data, safe to cache long-term)
//   everything else → network-first
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isHtml = url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname.endsWith('/muscleforge/');
  const isData = url.pathname.includes('/data/') || url.pathname.includes('/js/') || url.pathname.endsWith('/manifest.json');

  if (url.origin !== self.location.origin) {
    // External (CDN, fonts) — network-first, cache as fallback
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  if (isData) {
    // Cache-first for static data files
    event.respondWith(
      caches.match(event.request).then((cached) =>
        cached || fetch(event.request).then((response) => {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
          return response;
        })
      )
    );
    return;
  }

  // Network-first for HTML and everything else (ensures updates are always seen)
  event.respondWith(
    fetch(event.request).then((response) => {
      if (isHtml) {
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
      }
      return response;
    }).catch(() => caches.match(event.request))
  );
});
