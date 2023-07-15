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


// Función para manejar el evento de desplazamiento y la animación del navbar
function handleScroll() {

  // Obtener la posición actual del desplazamiento vertical
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  const navbarContainer = document.querySelector('#navbar-container');
  const navbar = document.querySelector('#navbar');
  const navbarLogo = document.querySelector('#logo-navbar');

  // Si el desplazamiento es mayor o igual a 20px
  if (scrollTop >= 64) {
    /* navbarContainer.remove('h-40')
    navbarContainer.add('h-14') */
    navbar.classList.remove('rounded-[50%]', '-top-48', 'h-80')
    navbar.classList.add('rounded-none', 'top-0', 'h-14');
    navbarLogo.classList.remove('h-40', 'w-40', 'top-[100px]', 'left-1/2')
    navbarLogo.classList.add('h-24', 'w-24', 'top-[60px]', 'left-16');
  } else {
    /* navbarContainer.remove('h-14')
    navbarContainer.add('h-40') */
    navbar.classList.remove('rounded-none', 'top-0', 'h-14');
    navbar.classList.add('rounded-[50%]', '-top-48', 'h-80');
    navbarLogo.classList.remove('h-24', 'w-24', 'top-[60px]', 'left-16');
    navbarLogo.classList.add('h-40', 'w-40', 'top-[100px]', 'left-1/2')
  }
}

window.addEventListener("scroll", handleScroll);


/* CARRUSEL */

document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
  const carouselIndicators = Array.from(document.querySelectorAll(".carousel-indicator"));
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentSlide = 0;

  function showSlide(index) {
    carouselItems.forEach(item => item.classList.remove("active"));
    carouselIndicators.forEach(indicator => indicator.classList.remove("active"));

    carouselItems[index].classList.add("active");
    carouselIndicators[index].classList.add("active");

    
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === carouselItems.length - 1;
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  function nextSlide() {
    if (currentSlide < carouselItems.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  carouselIndicators.forEach((indicator, index) => indicator.addEventListener("click", () => showSlide(index)));
});