const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.Menu');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
    }
});

// Ocultar el menú al cargar en dispositivos de escritorio
window.addEventListener('load', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
    }
});