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
    } else {
        console.error('Navigation menu element not found');
    }

    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    } else {
        console.error('Back to top button not found');
    }

    const someElement = document.getElementById('some-element-id');
    if (someElement) {
        someElement.addEventListener('click', function() {
            // Your event handler code here
        });
    } else {
        console.error('Element with ID "some-element-id" not found');
    }
});