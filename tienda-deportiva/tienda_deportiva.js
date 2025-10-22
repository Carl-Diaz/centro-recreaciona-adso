const menuBtn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');

        menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        menuBtn.textContent = menu.classList.contains('open') ? '✖' : '☰';
        });