document.querySelectorAll('.fila-productos').forEach(fila => {
    const contenedor = fila.querySelector('.productos-grid');
    const flechaIzq = fila.querySelector('.flecha-izquierda');
    const flechaDer = fila.querySelector('.flecha-derecha');
    const producto = contenedor.querySelector('.producto');

    // Ancho de 1 producto (incluyendo el gap)
    const productoWidth = producto.offsetWidth + 20;

    flechaDer.addEventListener('click', () => {
        contenedor.scrollBy({ left: productoWidth, behavior: 'smooth' });
    });

    flechaIzq.addEventListener('click', () => {
        contenedor.scrollBy({ left: -productoWidth, behavior: 'smooth' });
    });
});

const menuBtn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');

        menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        menuBtn.textContent = menu.classList.contains('open') ? '✖' : '☰';
        });