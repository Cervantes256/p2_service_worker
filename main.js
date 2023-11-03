const listaArticulos = document.getElementById("lista-articulos");

articulos.forEach((articulo) => {
  const listItem = document.createElement("span");
  listItem.innerHTML = `
     <div class="post" style="margin-left: 0px; pading-bottom:3px">
     <img src="${articulo.imagen}"  style="width: 60%; heigth:70%"class="post_image" alt="${articulo.titulo}<">
     <div class="post_info">
    <h2>${articulo.titulo}</h2>
    <div class="info">  
    <span>${articulo.fecha_creacion}</span>
    <a href="articulo_${articulo.id}.html"> <br>
    <span class="read_more">Read more...</span>
    </a>
    </div>
    </div>

 </div>`;
  listaArticulos.appendChild(listItem);
});

//Verificar si el navegador soporta Service Worker
if ("serviceWorker" in navigator && "PushManager" in window) {
  //regsitramos el service worker
  navigator.serviceWorker
    .register("service-worker.js")
    .then((registration) => {
      console.log("serice worker registrado con exito.".registration);
      //Solicitamos el permiso para la notificación
      return Notification.requestPermission();
    })
    .then((permission) => {
      if (permission === "granted") {
        console.log("Permiso de notificacion concedido");

        //Aqui agregamos la notificación push de la API que estariamos usando.
        return navigator.serviceWorker.ready;
      } else {
        console.log("Permiso de notificación denegado");
      }
    })
    .then((swRegistration) => {
      //Aqui deberian ir la suscripcion a la API que quieres usar.
    })
    .catch((error) => {
      console.log("Error en el registro del service worker", error);
    });
}

const navbar = document.querySelector("nav");
articulos.forEach((articulo) => {
    const enlace = document.createElement("a");
    enlace.href = `articulo_${articulo.id}.html`;
    enlace.textContent = articulo.titulo;
    navbar.appendChild(enlace);
});
