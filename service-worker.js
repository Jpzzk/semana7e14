const CACHE_NAME = 'ecoshop-cache-v1';
const urlsToCache = [
    './',
    'index.html',
    'styles.css',
    'app.js',
    'icons/icon-192x192.png',
    'icons/icon-512x512.png'
];

// Salva os arquivos no cache assim que o PWA instala
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Busca as coisas no cache se a internet sumir
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request);
        })
    );
});