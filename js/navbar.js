/* DESPLIQUE HAMBURGER MENU */

const hamburgerMenuBtn = document.querySelector('#hamburger-menu-btn');
const hamburgerMenu = document.querySelector('#hamburguer-menu');

hamburgerMenuBtn.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
});

/* OCULTAR HAMBURGER MENU AL CLIC POR FUERA DE ÉL */

document.addEventListener('click', (event) => {
  const isMenuClicked = hamburgerMenu.contains(event.target) || hamburgerMenuBtn.contains(event.target);
  if (!isMenuClicked) {
    hamburgerMenu.classList.remove('active');
  }
});

/* ESTILOS OPCIONES HAMBURGER MENU SEGÚN NAVEGACIÓN */

const path = window.location.pathname;
const hamburgerMenuItems = document.querySelectorAll('.hamburger-menu-item');
console.log(path);
hamburgerMenuItems.forEach((item) => {
  const href = item.getAttribute('href');
  console.log(href);
  if (href === path) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});


// ANIMACION SEGUN SCROLL
function handleScroll() {

  // Obtener la posición actual del desplazamiento vertical
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  const navbar = document.querySelector('#navbar');
  const navbarLogo = document.querySelector('#logo-navbar');

  // Si el desplazamiento es mayor o igual a 20px
  if (scrollTop >= 64) {
    navbar.classList.remove('rounded-[50%]', '-top-48', 'h-80')
    navbar.classList.add('rounded-none', 'top-0', 'h-14');
    navbarLogo.classList.remove('h-40', 'w-40', 'top-[100px]', 'left-1/2')
    navbarLogo.classList.add('h-24', 'w-24', 'top-[60px]', 'left-16');
  } else {
    navbar.classList.remove('rounded-none', 'top-0', 'h-14');
    navbar.classList.add('rounded-[50%]', '-top-48', 'h-80');
    navbarLogo.classList.remove('h-24', 'w-24', 'top-[60px]', 'left-16');
    navbarLogo.classList.add('h-40', 'w-40', 'top-[100px]', 'left-1/2')
  }
}

window.addEventListener("scroll", handleScroll);