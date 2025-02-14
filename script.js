// Combined functionality for lightbox, hamburger menu, and form submission
document.addEventListener('DOMContentLoaded', function () {
    // Ensure jQuery is available
    if (window.jQuery) {
        // Hamburger menu functionality
        const navMenu = document.querySelector('#nav-menu');
        const navLinks = document.querySelectorAll('#nav-menu a');

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

        // Remove popup message for "Products" link
        $("a[href='#featured-products']").click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $("#featured-products").offset().top
            }, 1000);
        });

        // Add to cart functionality
        $('.add-to-cart').on('click', function() {
            const productCard = $(this).closest('.product-card');
            const productId = productCard.data('id');
            const productName = productCard.data('name');
            const productPrice = productCard.data('price');

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProduct = cart.find(product => product.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${productName} has been added to your cart.`);
        });
    } else {
        console.error("jQuery is not loaded");
    }
});