function alternarSeccion(elementoPresionado) {
    // Buscamos el bloque de contenido que está justo después del título
    const contenido = elementoPresionado.nextElementSibling;

    // Si ya está abierto, lo cerramos.
    if (contenido.classList.contains('activo')) {
        contenido.classList.remove('activo');
    } else {
        // Cierra las demás secciones abiertas para que solo una esté visible
        cerrarTodasLasSecciones();
        contenido.classList.add('activo');
    }
}

function cerrarTodasLasSecciones() {
    const todosLosContenidos = document.querySelectorAll('.contenido-desplegable');
    todosLosContenidos.forEach(seccion => {
        seccion.classList.remove('activo');
    });
}