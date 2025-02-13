// Combined functionality for lightbox, hamburger menu, and form submission
document.addEventListener('DOMContentLoaded', function () {
    // Ensure jQuery is available
    if (window.jQuery) {
        // Hamburger menu functionality
        
        const navMenu = document.querySelector('#nav-menu');
        const navLinks = document.querySelectorAll('#nav-menu a');

       
        }

        // Handle form submission
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const serviceID = 'service_7ltlnnh'; // Replace with your actual service ID
            const templateID = 'template_60oy1on'; // Replace with your actual template ID
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert("Thank you for your message! We will get back to you soon.");
                    document.getElementById('contact-form').reset();
                }, (error) => {
                    alert("There was an error submitting your message. Please try again later.");
                });
        });

        // Show popup message when "Shop" link is clicked
        $("a[href='#featured-products']").click(function(event) {
            event.preventDefault();
            alert("Coming soon!");
        });

       
     {
        console.error("jQuery is not loaded");
    }
});