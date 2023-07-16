const createCarousel = containerId => {
  const container = document.getElementById(containerId);
  const carouselItems = Array.from(container.querySelectorAll(".carousel-item"));
  const carouselIndicators = Array.from(container.querySelectorAll(".carousel-indicator"));
  const prevBtn = container.querySelector(".prevBtn");
  const nextBtn = container.querySelector(".nextBtn");
  let currentSlide = 0;

  const showSlide = index => {
    carouselItems.forEach(item => item.classList.remove("active"));
    carouselIndicators.forEach(indicator => indicator.classList.remove("active"));

    carouselItems[index].classList.add("active");
    carouselIndicators[index].classList.add("active");

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === carouselItems.length - 1;
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  const nextSlide = () => {
    if (currentSlide < carouselItems.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  carouselIndicators.forEach((indicator, index) => indicator.addEventListener("click", () => showSlide(index)));
}

// Crear instancias de los carruseles
createCarousel("carousel-blowers-industrial");
