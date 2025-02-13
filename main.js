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

    const backToTopButton = document.getElementById('back-to-top');

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
});

document.addEventListener('DOMContentLoaded', function() {
    // No additional JavaScript needed for the sticky navigation bar
});