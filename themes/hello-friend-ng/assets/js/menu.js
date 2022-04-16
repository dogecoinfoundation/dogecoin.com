// Mobile menu
const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");
const mobileQuery = getComputedStyle(document.body).getPropertyValue(
  "--tabletWidth"
);
const isMobile = () => window.matchMedia(mobileQuery).matches;
const isMobileMenu = () => {
  menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
};

isMobileMenu();

menuTrigger &&
  menuTrigger.addEventListener(
    "click",
    () => menu && menu.classList.toggle("hidden")
  );

window.addEventListener("resize", isMobileMenu);

if (!window.location.toString().includes("dogepedia")) {
  var rect = document.querySelector("#home").getBoundingClientRect();
  var offset = {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
  var navbar = document.querySelector('header')
  // Script to hide/show menu
  var video = document.querySelector('#video-header');
  window.onscroll = function () {
    // pageYOffset or scrollY
    
    if (window.pageYOffset > rect.height) {
        navbar.classList.add('scrolled')
        video.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
        video.classList.remove('scrolled')
    }
  }
}

window.addEventListener('load', function () {
  if (screen.width <= 991) {
      document.querySelector('.menu__inner').addEventListener('click', function () {
          let menu = document.querySelector(".menu");
          menu.classList.toggle('hidden');
      });
  }
});