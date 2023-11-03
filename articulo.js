if (match && match[1]) {
    // Obtener el número del nombre del archivo
    const articuloNumero = parseInt(match[1]);

    // Encontrar el artículo correspondiente según el número
    const articuloEncontrado = articulos.find(articulo => articulo.id === articuloNumero);

    if (articuloEncontrado) {
        document.getElementById("titulo-articulo").textContent = articuloEncontrado.titulo;
        document.getElementById("contenido-articulo").innerHTML = articuloEncontrado.contenido;
    } else {
        // Manejar el caso cuando no se encuentra el artículo
        document.getElementById("titulo-articulo").textContent = "Artículo no encontrado";
        document.getElementById("contenido-articulo").textContent = "Lo sentimos, el artículo solicitado no fue encontrado.";
    }
} else {
    // Manejar el caso cuando el nombre del archivo no coincide con el formato esperado
    document.getElementById("titulo-articulo").textContent = "Nombre de archivo incorrecto";
    document.getElementById("contenido-articulo").textContent = "El nombre del archivo no coincide con el formato esperado.";
}

