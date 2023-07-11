/* DESPLIQUE HAMBURGER MENU */

const hamburgerMenuBtn = document.querySelector('#hamburger-menu-btn');
const hamburgerMenu = document.querySelector('#hamburguer-menu');

hamburgerMenuBtn.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hidden');
});

/* OCULTAR HAMBURGER MENU AL CLIC POR FUERA DE ÉL */

document.addEventListener('click', (event) => {
  const isMenuClicked = hamburgerMenu.contains(event.target) || hamburgerMenuBtn.contains(event.target);
  console.log(isMenuClicked);
  if (!isMenuClicked) {
    hamburgerMenu.classList.add('hidden');
  }
});

/* ESTILOS OPCIONES HAMBURGER MENU SEGÚN NAVEGACIÓN */

const path = window.location.pathname;
const hamburgerMenuItems = document.querySelectorAll('.hamburger-menu-item');
hamburgerMenuItems.forEach((item) => {
  const href = item.getAttribute('href');
  if (href === path) {
    item.classList.add('text-white', 'bg-secondary');
    item.classList.remove('text-gray-900', 'hover:bg-grey/10')
  } else {
    item.classList.add('text-gray-900', 'hover:bg-grey/10')
    item.classList.remove('text-white', 'bg-secondary');
  }
});
