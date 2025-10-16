// ===== MENU BURGER =====
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('#navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// ===== FADE-IN SCROLL =====
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// ===== THEME TOGGLE =====
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});
