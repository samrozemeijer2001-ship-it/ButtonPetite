// Lichaamschemie service worker: bewaart de app-schil voor offline gebruik.
// Verhoog VERSION bij elke wijziging aan de app, zodat gebruikers de update krijgen.
const VERSION = 'v1.0.1';
const CACHE = `lichaamschemie-shell-${VERSION}`;
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/app.css',
  './js/content.js',
  './js/app.js',
  './fonts/barlow-condensed-latin-900-normal.woff2',
  './fonts/rubik-latin-400-normal.woff2',
  './fonts/rubik-latin-700-normal.woff2',
  './fonts/rubik-latin-800-normal.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('lichaamschemie-shell-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // bronlinks gaan gewoon naar het netwerk

  // Pagina: eerst netwerk zodat updates binnenkomen, offline uit de cache.
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const res = await fetch(req);
        const c = await caches.open(CACHE);
        c.put('./index.html', res.clone());
        return res;
      } catch (e) {
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  // Overige bestanden: eerst cache, bij eerste gebruik aanvullen.
  event.respondWith((async () => {
    const hit = await caches.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
      return res;
    } catch (e) {
      return Response.error();
    }
  })());
});
