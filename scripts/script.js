const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const mainNavLinks = document.querySelector('.main-navlinks');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const main = document.querySelector('main');

// Define de min-height of main tag for full cover available screen height
main.style.minHeight = document.body.offsetHeight - footer.offsetHeight - header.offsetHeight - 55 + 'px';

const toogleNav = e => {
    mobileMenu.classList.toggle('open');
    closeMenu.classList.toggle('open');
    const ariaToggle = mobileMenu.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
    mobileMenu.setAttribute('aria-expanded', ariaToggle);
    closeMenu.setAttribute('aria-expanded', ariaToggle);
    mainNavLinks.classList.toggle('open');
    
}
mobileMenu.addEventListener('click', toogleNav);
closeMenu.addEventListener('click', toogleNav);

new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 900) {
        mainNavLinks.style.transition = 'transform 0.3s ease-out';
    } else {
        mainNavLinks.style.transition = 'none';
    }
    
}).observe(document.body);