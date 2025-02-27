// Botón "Volver arriba"
//const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollTopNav = document.getElementById("scrollTopNav");

// window.onscroll = () => {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     scrollTopBtn.style.display = "block";
//   } else {
//     scrollTopBtn.style.display = "none";
//   }
// };

// scrollTopBtn.addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });

window.onscroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      scrollTopNav.style.display = "block";
    } else {
      scrollTopNav.style.display = "none";
    }
  };