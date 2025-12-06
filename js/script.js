// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const header = document.querySelector('header');

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Hide header on scroll down, show on scroll up
let lastScrollTop = 0;
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScrollTop) {
            // Scrolling DOWN
            header.classList.add('hide');
        } else {
            // Scrolling UP
            header.classList.remove('hide');
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});