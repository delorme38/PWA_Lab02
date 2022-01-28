self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation - v1');
    e.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                'index.html',
                'manifest.json',
                'index.js',
                'sw.js',
                'Carte.js',
                'favicon.ico',
                'bootstrap-5.1.3-dist/css/bootstrap.min.css',
                'icons-1.7.2/font/bootstrap-icons.css',
                'bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
                'img/img-1.jpg',
                'img/img-2.jpg',
                'img/img-3.jpg',
                'img/img-4.jpg',
                'img/img-5.jpg',
                'img/img-6.jpg',
                'img/img-7.jpg',
                'img/img-8.jpg',
                'icon-192x192.png',
                'icon-256x256.png',
                'icon-384x384.png',
                'icon-512x512.png'
            ]);
        })
    );

})

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('img/img.jpg');
        });
      }
    }));
  });



self.addEventListener('activate', (e) => {
    console.log('active');
});
