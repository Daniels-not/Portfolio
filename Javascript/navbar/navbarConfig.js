const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const desc = document.querySelector("#home_section");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  desc.classList.toggle("magic");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  desc.classList.remove("magic");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));




