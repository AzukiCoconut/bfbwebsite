// const
const btn = document.getElementById('form-submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

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

document.getElementById('feedback-form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'service_sy1rzve';
  const templateID = 'template_c3nbxxj';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      name.value = '';
      phone.value = '';
      email.value = '';
      message.value = '';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});

// Event Listeners
document.addEventListener("DOMContentLoaded", userScroll);
