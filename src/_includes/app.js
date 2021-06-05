const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuIcon = document.querySelector("#mobile-menu i");
const menuLinks = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuLinks.classList.toggle("active");
    mobileMenuIcon.classList.toggle("fa-bars");
    mobileMenuIcon.classList.toggle("fa-times");
});