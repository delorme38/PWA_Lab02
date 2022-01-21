self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation - v1');

    //completer ici
    e.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                './index.html',
                'index.js',
                './sw.js',
                './Carte.js',
                './favicon.ico',
                './bootstrap-5.1.3-dist/css/bootstrap.min.css',
                './icons-1.7.2/font/bootstrap-icons.css',
                './bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
                './img/img-1.jpg',
                './img/img-2.jpg',
                './img/img-3.jpg',
                './img/img-4.jpg',
                './img/img-5.jpg',
                './img/img-6.jpg',
                './img/img-7.jpg',
                './img/img-8.jpg'
            ]);
        })
    );

})
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
    );
});




self.addEventListener('activate', (e) => {
    console.log('active');
});