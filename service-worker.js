const cacheName = 'food';

const cacheAssets = [
  "index.html",
  "hmepage.html",
  "main.html",
  "s3.jpg",
  "d_l.gif",
  "myscript.js",
  "main.js",
];

self.addEventListener('install', evt =>
{
  console.log('Service Worker Installed');
  evt.waitUntil(
    caches
    .open(cacheName)
    .then(cache => {
      console.log("Caching Files");
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  )
});

self.addEventListener('activate', evt =>
{
  console.log('Service Worker Activated');
});







