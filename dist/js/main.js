// Select DOM Items 

const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial State of the menu
let showMenu = false;

menu_btn.addEventListener('click', toggleMenu);

function toggleMenu ()  {
    if (!showMenu) {
        menu_btn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(navItem => navItem.classList.add("show"));

        showMenu = true;
    }
    else {
        menu_btn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(navItem => navItem.classList.remove("show"))

        showMenu = false;
    }
}
