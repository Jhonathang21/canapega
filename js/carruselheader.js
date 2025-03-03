document.addEventListener('DOMContentLoaded', function() {
    const carouselSlides = document.querySelectorAll('.carousel-slide-header');
    const prevButton = document.querySelector('.carousel-button.prev1');
    const nextButton = document.querySelector('.carousel-button.next1');
    let currentSlide = 0;
  
    function showSlide(n) {
      carouselSlides[currentSlide].style.display = 'none';
      currentSlide = (n + carouselSlides.length) % carouselSlides.length;
      carouselSlides[currentSlide].style.display = 'block';
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    // Iniciar el carrusel
    showSlide(0);
  
    // Cambio automático de diapositivas cada 5 segundos
    setInterval(nextSlide, 5000);
  });