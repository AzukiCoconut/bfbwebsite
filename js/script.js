// User scroll for Navbar
function userScroll() {
  const navbar = document.querySelector(".navbar");
  const navlinks = document.querySelectorAll(".scroll");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("border-bottom");
      navbar.classList.add("border-secondary");
      navbar.classList.add(".navbar-sticky");
      navlinks.forEach((link) => {
        link.classList.add("text-white");
      });
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("border-bottom");
      navbar.classList.remove("border-secondary");
      navbar.classList.remove(".navbar-sticky");
      navlinks.forEach((link) => {
        link.classList.remove("text-white");
      });
    }
  });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", userScroll);
