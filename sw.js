// Service worker: appen virker offline. Netværk først (så opdateringer kommer med det samme), ellers cache.
const CACHE = 'reparationssedler-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;   // Dropbox-kald går direkte
  e.respondWith((async () => {
    try {
      const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 4000);
      const r = await fetch(e.request, { signal: ctrl.signal, cache: 'no-store' }); clearTimeout(t);
      if (r.ok) { const c = await caches.open(CACHE); c.put(e.request, r.clone()); }
      return r;
    } catch (_) {
      const m = await caches.match(e.request, { ignoreSearch: true });
      return m || caches.match('./index.html');
    }
  })());
});
