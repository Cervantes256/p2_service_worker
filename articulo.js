const urlParams = new URLSearchParams(window.location.search);
const articuloId = parseInt(urlParams.get('id'));

const articuloEncontrado = articulos.find(articulo => articulo.id === articuloId);

if (articuloEncontrado) {
    document.getElementById("titulo-articulo").textContent = articuloEncontrado.titulo;
    document.getElementById("contenido-articulo").innerHTML = articuloEncontrado.contenido;
} else {
    // Manejar el caso cuando no se encuentra el artículo
}
