 // Botón Volver Arriba
 const scrollToTopBtn = document.getElementById("scroll-to-top");

 window.addEventListener("scroll", () => {
     if (window.pageYOffset > 100) {
         scrollToTopBtn.style.display = "flex";
     } else {
         scrollToTopBtn.style.display = "none";
     }
 });

 scrollToTopBtn.addEventListener("click", () => {
     window.scrollTo({
         top: 0,
         behavior: "smooth"
     });
 });