document.addEventListener('DOMContentLoaded', () => {
    console.log("main.js loaded and DOM fully loaded and parsed");

    const navMenu = document.querySelector('nav#nav-menu'); // Select the navigation menu element

    if (navMenu) {
        const menuItems = navMenu.querySelectorAll('ul li a');
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }
});