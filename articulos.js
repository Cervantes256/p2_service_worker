const articulos = [
    {
        id: 1,
        titulo: "¿Qué son las Progressive Web Apps?",
        contenido: `
        <center><img src='img/pwa_1.jpg'  style="width: 60%; heigth:70% "class="post_image" alt='PWA'></center>
        <p>Las Progressive Web Apps (PWA) son aplicaciones web que ofrecen una experiencia similar a las de las aplicaciones nativas en dispositivos móviles. Están diseñadas para ser rápidas, confiables y atractivas para los usuarios.</p>
        <p>Una de sus características principales es la capacidad para funcionar sin conexión a internet, permitiendo a los usuarios acceder al contenido incluso cuando no tienen conexión. Esto se logra mediante el uso de tecnologías como Service Workers, que permiten el almacenamiento en caché de recursos y el funcionamiento sin conexión.</p>
        <p>Además, las PWA pueden ofrecer:</p>
        <ul>
          <li><strong>Interactividad:</strong> Pueden incluir elementos interactivos como formularios, mapas y juegos para mejorar la participación del usuario.</li>
          <li><strong>Capacidad de Instalación:</strong> Los usuarios pueden instalar la PWA en su dispositivo desde el navegador, lo que permite un acceso rápido y fácil sin necesidad de descargar desde una tienda de aplicaciones.</li>
          <li><strong>Compatibilidad Multiplataforma:</strong> Se ejecutan en diferentes dispositivos y plataformas, incluyendo móviles, tabletas y computadoras de escritorio.</li>
          <li><strong>Notificaciones Push:</strong> Pueden enviar notificaciones push a los usuarios, manteniéndolos informados incluso cuando la aplicación no está abierta en el navegador.</li>
          <li><strong>Seguridad:</strong> Utilizan HTTPS para asegurar la transferencia segura de datos entre el usuario y el servidor, garantizando la privacidad y seguridad del usuario.</li>
        </ul>
        <p>Las PWA se han vuelto cada vez más populares debido a su capacidad para ofrecer una experiencia de usuario avanzada sin la necesidad de descargar e instalar una aplicación desde una tienda. Son ideales para sitios web que desean proporcionar una experiencia móvil robusta y atractiva a sus usuarios.</p>

         `,
        imagen: "img/pwa_1.jpg",
        fecha_creacion: 'Miércoles 1 de noviembre de 2023'
    },
    {
        id: 2,
        titulo: "Ventajas de las Progressive Web Apps",
        contenido:  `
        <center><img src='img/pwa_1.webp'  style="width: 60%; heigth:70% "class="post_image" alt='PWA'></center>
        <p>Las Progressive Web Apps (PWA) representan una evolución significativa en el mundo del desarrollo web, ofreciendo una serie de ventajas que las convierten en una opción atractiva tanto para los desarrolladores como para los usuarios:</p>
<ul>
  <li><strong>Experiencia sin Conexión:</strong> Una de las principales ventajas de las PWA es su capacidad para funcionar sin conexión a internet. Esto significa que los usuarios pueden acceder al contenido incluso en condiciones de red deficientes o ausentes, mejorando así la accesibilidad y la retención del usuario.</li>
  
  <li><strong>Interactividad Avanzada:</strong> Las PWA pueden incluir elementos interactivos como formularios dinámicos, mapas interactivos y juegos en línea, ofreciendo una experiencia de usuario rica y envolvente. Esto se traduce en una mayor participación del usuario y una sensación de inmersión.</li>
  
  <li><strong>Instalación Sencilla:</strong> Los usuarios pueden instalar una PWA en sus dispositivos con un solo clic, sin necesidad de pasar por una tienda de aplicaciones. Esto simplifica el proceso de instalación y mejora la accesibilidad para los usuarios menos técnicos.</li>
  
  <li><strong>Compatibilidad Multiplataforma:</strong> Las PWA están diseñadas para funcionar de manera fluida en una variedad de dispositivos y plataformas, incluyendo teléfonos móviles, tabletas y computadoras de escritorio. Esto garantiza una experiencia coherente para los usuarios, independientemente del dispositivo que estén utilizando.</li>
  
  <li><strong>Notificaciones Push:</strong> Las PWA pueden enviar notificaciones push a los dispositivos de los usuarios, incluso cuando la aplicación no está activa en el navegador. Esto permite a los sitios web enviar mensajes importantes y actualizaciones a los usuarios, mejorando la participación y la retención.</li>
  
  <li><strong>Seguridad y Privacidad:</strong> Las PWA deben implementarse utilizando HTTPS, lo que garantiza una conexión segura entre el usuario y el servidor. Esto es especialmente importante para sitios web que manejan datos sensibles. Además, las PWA respetan la privacidad del usuario al no requerir permisos intrusivos para su instalación.</li>
  
  <li><strong>Actualizaciones Automáticas:</strong> Las PWA se actualizan de forma automática en segundo plano, lo que significa que los usuarios siempre disfrutan de la última versión de la aplicación sin necesidad de intervención manual. Esto asegura que los usuarios tengan acceso a las últimas características y mejoras de seguridad.</li>
</ul>

<p>Ofrecen una experiencia de usuario avanzada y sin fricciones, combinando lo mejor de las aplicaciones web y nativas. Su facilidad de instalación, capacidad para funcionar sin conexión, interactividad y seguridad hacen que sean una opción poderosa para sitios web que desean ofrecer una experiencia móvil atractiva y confiable a sus usuarios.</p>

         `,
        imagen: "img/pwa_1.webp",
        fecha_creacion: 'Miércoles 1 de noviembre de 2023'
    }
];




// Exportar el array de artículos directamente
window.articulos = articulos;
