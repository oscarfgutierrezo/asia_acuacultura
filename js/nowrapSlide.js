const nowrapSlide = ( containerId, scroll ) => {
    const container = document.getElementById(containerId);
    const images = container.querySelector(".slide-container");
    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");
    prevBtn.disabled = false

    const leftSlide = () => {
        images.scrollBy({
            left: -scroll, // Valor para ajustar el desplazamiento
            behavior: 'smooth'
        });
    }

    const rightSlide = () => {
        images.scrollBy({
            left: scroll, // Valor para ajustar el desplazamiento
            behavior: 'smooth'
        });
    }

    prevBtn.addEventListener("click", leftSlide);
    nextBtn.addEventListener("click", rightSlide);
}

if (window.location.pathname === '/asesorias.html') {
    nowrapSlide("slide-asesorias-fotos", 200);
    nowrapSlide("slide-asesorias-testimoniales", 200);
} else if (window.location.pathname === '/' && (window.innerWidth >= 1024)) {
    nowrapSlide("slide-home-fotos", 400)
};

console.log(window.location.pathname);