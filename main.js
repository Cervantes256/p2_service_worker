//Verificar si el navegador soporta Service Worker
if ('serviceWorker' in navigator && 'PushManager' in window) {
    //regsitramos el service worker
    navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
            console.log('serice worker registrado con exito.'.registration);
            //Solicitamos el permiso para la notificación
            return Notification.requestPermission();
        })
        .then((permission) => {
            if (permission==='granted') {
                console.log('Permiso de notificacion concedido');

                //Aqui agregamos la notificación push de la API que estariamos usando.
                return navigator.serviceWorker.ready;
            }else{
                console.log('Permiso de notificación denegado');
            }})
            .then(swRegistration => {
                //Aqui deberian ir la suscripcion a la API que quieres usar.
            })
        .catch((error) => {
            console.log('Error en el registro del service worker', error);
        });
}