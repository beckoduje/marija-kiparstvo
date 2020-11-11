const mainContainer = document.querySelector(".main-container");
const maraName = document.querySelector(".mara-name");
const about = document.querySelector(".about");
const navOverlayCont = document.querySelector(".nav-overlay-container");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("open");
  maraName.classList.toggle("open");
  about.classList.toggle("open");
  navOverlayCont.classList.toggle("open");
  menuBtn.classList.toggle("open");
});

/* Kod za Logo i Header prilikom skrolanja naniže */
let scrollpos = window.scrollY;
const logo = document.querySelector(".mara-name__logo");
const height = 25;

const fullName = document.querySelector(".mara-name__link");

const mdLogo = document.querySelector(".mara-name__logo-medium-devices");

function addClassOnScroll() {
  logo.classList.add("show-logo");
  fullName.classList.add("hide-name");
  mdLogo.classList.add("show-md-logo");
  menuBtn.classList.add("black-btn");
}

function removeClassOnScroll() {
  logo.classList.remove("show-logo");
  fullName.classList.remove("hide-name");
  mdLogo.classList.remove("show-md-logo");
  menuBtn.classList.remove("black-btn");
}

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;
  if (scrollpos >= height) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
});
