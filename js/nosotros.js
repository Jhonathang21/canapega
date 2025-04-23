document.addEventListener('DOMContentLoaded', function() {
  const nosotrosLink = document.getElementById('nosotros-link');
  const cardMision = document.querySelector('.card-mision');
  const cardVision = document.querySelector('.card-vision');
  const quienesSomosSection = document.getElementById('quienes-somos');
  
  // Función para activar animaciones
  function activateAnimations() {
    // Resetear animaciones
    cardMision.classList.remove('animated');
    cardVision.classList.remove('animated');
    
    // Forzar reflow/relayout para reiniciar la animación
    void cardMision.offsetWidth;
    void cardVision.offsetWidth;
    
    // Activar animaciones
    cardMision.classList.add('animated');
    cardVision.classList.add('animated');
  }
  
  // Observador para detectar cuando la sección está visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateAnimations();
      }
    });
  }, {threshold: 0.1});
  
  observer.observe(quienesSomosSection);
  
  // También activar al hacer clic en el enlace "Nosotros"
  if(nosotrosLink) {
    nosotrosLink.addEventListener('click', function(e) {
      // Pequeño retraso para asegurar que la sección está visible antes de animar
      setTimeout(activateAnimations, 100);
    });
  }
  
  // Activar animaciones si ya estamos en la sección al cargar la página
  if(window.location.hash === '#quienes-somos') {
    activateAnimations();
  }
});