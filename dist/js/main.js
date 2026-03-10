// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const mobileNav = document.getElementById('mobileNav');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    showMenu = !showMenu;
    hamburger.classList.toggle('open', showMenu);
    mobileNav.classList.toggle('open', showMenu);
    document.body.style.overflow = showMenu ? 'hidden' : '';
}

// Close mobile nav on link click
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (showMenu) toggleMenu();
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});
