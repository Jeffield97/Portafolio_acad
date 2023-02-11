const navToggle = document.querySelector(".btn__menu")
const navMenu = document.querySelector(".navbar")
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__visible")
})