document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');
    
    let currentIndex = 0;
    const slideWidth = 100; // 100%
    
    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Evento para el botón anterior
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });
    
    // Evento para el botón siguiente
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
    
    // Eventos para los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Autoplay
    let autoplayInterval = setInterval(function() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);
    
    // Detener autoplay al interactuar con el carrusel
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', function() {
        clearInterval(autoplayInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', function() {
        autoplayInterval = setInterval(function() {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 5000);
    });
    
    // Soporte para deslizamiento táctil
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Deslizar a la izquierda (siguiente)
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }
        
        if (touchEndX > touchStartX + 50) {
            // Deslizar a la derecha (anterior)
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateCarousel();
        }
    }
});