document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const hamburgerButton = document.querySelector('button.hamburger');
    const navMenu = document.querySelector('nav#nav-menu');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', () => {
            console.log("Hamburger clicked");
            navMenu.classList.toggle('show');
        });
    }

    if (navMenu) {
        const menuItems = navMenu.querySelectorAll('ul li a');
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }
});