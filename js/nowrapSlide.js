const nowrapSlide = ( containerId ) => {
    const container = document.getElementById(containerId);
    const images = container.querySelector(".slide-container")
    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");

    const leftSlide = () => {
        images.scrollBy({
            left: -200, // Valor para ajustar el desplazamiento
            behavior: 'smooth'
        });
    }

    const rightSlide = () => {
        images.scrollBy({
            left: 200, // Valor para ajustar el desplazamiento
            behavior: 'smooth'
        });
    }

    prevBtn.addEventListener("click", leftSlide);
    nextBtn.addEventListener("click", rightSlide);
}

nowrapSlide("slide-asesorias-fotos")