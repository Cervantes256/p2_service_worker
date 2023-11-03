//Nombre del cache
const cacheName = 'project';
//Archivos y recuros para almacenar en cache
const cacheAssets = [   
    "/",
    'articulo.html',
    'articulo_1.html',  
    'articulo_2.html',
    'articulo.js',
    'articulos.js', 
    'index.html',
    'main.js',
    'img/pwa_1.jpg',
    'img/pwa_1.webp',
    'style.css'      
    //Agregar mas recursos que se necesiten como imagenes, css, etc.
];
//Instalar el service worker
self.addEventListener('install', (event) => {
    console.log('Service worker: Instalado');

    //Precarga de los recursos para guardar en cache
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                console.log('Service worker: Cacheado en archivos.');
                return cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

//Activar el service worker

self.addEventListener('activate', (event) => {
    console.log('Service worker: Activado');
    //Eliminar caches antiguas
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service worker: Limpiando cache antigua');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

//Escuchamos el evento push para mostrar una notificación
self.addEventListener('push', function(event){  
    console.log('[Service Worker] Push recibido');
    console.log(`[Service Worker] Datos del Push: "${event.data.text()}"`);
    //Usamos const para manejar y controlar las notificaciones del service worker y la API implementada.
    const title = 'Hola de nuevo';
    const options = {
        body: event.data.text(),
        icon: 'icono.png',
        badge: 'insignia.png'
    };
    event.waitUntilEvent(self.ServiceWorkerRegistration.showNotification(title, options));
})

//Manejo de peticiones 

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    console.log('Service worker: Fetching');
    // Manejar solicitudes para 'articulo.html' con ID variable
    if (url.origin === self.origin && url.pathname === '/articulo.html') {
        
      event.respondWith(
        // Intentar obtener el recurso desde la red
        fetch(event.request).then((networkResponse) => {
          // Si la solicitud es exitosa, almacenarla en caché y devolver la respuesta
          const responseClone = networkResponse.clone();
          caches.open('mi-cache').then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        }).catch(() => {
          // Si hay un error al obtener el recurso desde la red, intentar obtenerlo desde la caché
          return caches.match(event.request).then((cacheResponse) => {
            return cacheResponse || caches.match('/offline.html'); // Puedes usar una página de error personalizada
          });
        })
      );
    }
  });
  
  // Resto del código del Service Worker para manejar otras funcionalidades
  