const hamburger = document.querySelector(".hamburger");
const navLinksMobile = document.querySelector(".nav-links-mobile");

let isMenuOpen = false;

hamburger.addEventListener("click", function () {
  console.log("Hamburger clicked");
  hamburger.classList.toggle("active");

  if (window.screen.width < 600) {
    if (!isMenuOpen) {
      isMenuOpen = true;
    } else {
      isMenuOpen = false;
    }
  }
});

// Add an event listener to detect the end of the CSS animation
navLinksMobile.addEventListener("animationend", function () {
  if (!isMenuOpen) {
    // If the menu is closed, hide it after the animation
    navLinksMobile.style.visibility = "hidden";
  }
});
