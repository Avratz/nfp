const CACHE_NAME = 'nfp-v1'
const contentToCache = [
  'images/error.png',
  'apple-touch-icon.png',
  'favicon.ico',
  'logo192.png',
  'logo512.png',
]
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      cache.addAll(contentToCache)
    })(),
  )
})
self.addEventListener('fetch', (event) => {
  if (!(event.request.url.indexOf('http') === 0)) return undefined
  event.respondWith(
    (async () => {
      let request = event.request
      const matchRequest = await caches.match(request)
      if (matchRequest) return matchRequest
      return fetch(request)
    })(),
  )
})
