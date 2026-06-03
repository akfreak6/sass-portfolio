// Mark JS as available so reveal animations engage (no-JS / no-CSS-support
// users always see content immediately)
document.documentElement.classList.add('js-reveal');

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
let menuOpen = false;

function setMenu(open) {
  menuOpen = open;
  menuBtn.classList.toggle('open', open);
  mobileNav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav.setAttribute('aria-hidden', String(!open));
  if (open) {
    mobileNav.removeAttribute('inert');
  } else {
    mobileNav.setAttribute('inert', '');
  }
  document.body.style.overflow = open ? 'hidden' : '';
}

menuBtn.addEventListener('click', () => {
  setMenu(!menuOpen);
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuOpen) setMenu(false);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOpen) {
    setMenu(false);
    menuBtn.focus();
  }
});

// Navbar scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

reveals.forEach(el => observer.observe(el));
