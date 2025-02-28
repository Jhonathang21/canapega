document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu")
    const navMenu = document.querySelector(".nav-menu")
    const navbar = document.getElementById("navbar")
    let lastScrollTop = 0
  
    // Toggle mobile menu
    mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  
    // Close mobile menu when a link is clicked
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  
    // Navbar scroll behavior
    window.addEventListener(
      "scroll",
      () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          navbar.style.top = "-70px"
        } else {
          // Scrolling up
          navbar.style.top = "0"
        }
  
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
      },
      false,
    )
  })
  
  