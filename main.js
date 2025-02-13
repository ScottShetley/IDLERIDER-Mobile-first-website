document.addEventListener('DOMContentLoaded'), () => {
    console.log("main.js loaded and DOM fully loaded and parsed");

    const navMenu = document.querySelector('nav#nav-menu'); // Select the navigation menu element

    if (navMenu) {
        const menuItems = navMenu.querySelectorAll('ul li a');
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', () => {
                navMenu.classList.remove('show');
                            });
                    });
            };
        }

// Remove the JavaScript code for the hamburger menu
/*
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('#nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    } else {
        console.error('Hamburger button or nav menu not found');
    }
});
*/