document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const hamburgerButton = document.querySelector('button.hamburger');
    const navMenu = document.querySelector('nav#nav-menu');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', () => {
            console.log("Hamburger clicked");
            const computedStyle = window.getComputedStyle(navMenu);
            if (computedStyle.display === 'none') {
                navMenu.style.display = 'block';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }

    if (navMenu) {
        const ul = navMenu.querySelector('ul');
        if (ul) {
            const menuItems = ul.children;
            for (let i = 0; i < menuItems.length; i++) {
                const menuItem = menuItems[i];
                menuItem.addEventListener('click', () => {
                    navMenu.style.display = 'none';
                });
            }
        }
    }

    console.log("jQuery is loaded and ready");

    // Show popup message when "Shop" link is clicked
    $("a[href='#featured-products']").click(function(event) {
        event.preventDefault();
        alert("Coming soon!");
    });

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const serviceID = 'service_7ltlnnh'; // Replace with your actual service ID
        const templateID = 'template_60oy1on'; // Replace with your actual template ID
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                console.log('SUCCESS!');
                alert("Thank you for your message! We will get back to you soon.");
                document.getElementById('contact-form').reset();
            }, (error) => {
                console.error('FAILED...', error);
                console.error('Error message:', error.text);
                console.error('Error stack:', error.stack);
                alert("There was an error submitting your message. Please try again later.");
            });
    });
});