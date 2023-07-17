const nowrapSlide = ( containerId ) => {
    const container = document.getElementById(containerId);
    console.log(container);
    const images = container.querySelector(".slide-container")
    console.log(images);
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
nowrapSlide("slide-asesorias-testimoniales")