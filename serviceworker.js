/* 

  Service Worker code taken from Matt Gaunt's primer at
  https://developers.google.com/web/fundamentals/primers/service-workers/. 
  Refer to Matt's primer for more information on developing your Service Worker.

*/

var CACHE_NAME = 'start-polymer3-cache';
var urlsToCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // If cache hit, return response from cache.
        if (response) {
          return response;
        }
        // Otherwise we should try to cache it.
        // Clone the request so that we can return it to the browser, and pass it to the cache.
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  /*
  
  If your service worker changes, you will need to add code here for cache management.
  See "Update a Service Worker" in Matt Gaunt's primer on Service Workers at https://developers.google.com/web/fundamentals/primers/service-workers/#update-a-service-worker

  */
});