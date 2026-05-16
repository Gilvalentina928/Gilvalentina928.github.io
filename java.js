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

function actualizarReloj() {
    const ahora = new Date();
    
    // Extraer componentes del tiempo
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    
    // Formatear para que siempre tengan dos dígitos (ej. 09 en vez de 9)
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    
    // Armar la cadena de texto del reloj
    const tiempoTexto = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj-digital').textContent = tiempoTexto;
    
    // Opcional: Agregar la fecha actual formateada de manera amigable
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaTexto = ahora.toLocaleDateString('es-ES', opciones);
    document.getElementById('fecha-digital').textContent = fechaTexto;
}

// Ejecutar la función inmediatamente al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarReloj();
    // Hacer que se ejecute cada 1000 milisegundos (1 segundo)
    setInterval(actualizarReloj, 1000);
});
