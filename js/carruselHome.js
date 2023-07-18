if (window.innerWidth < 1024) {
  document.addEventListener("DOMContentLoaded", function() {  
    const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
    const carouselIndicators = Array.from(document.querySelectorAll(".carousel-indicator"));
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
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
      console.log('prueba');
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
  });
}
