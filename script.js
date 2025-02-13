// Combined functionality for lightbox, hamburger menu, and form submission
document.addEventListener('DOMContentLoaded', function () {
    // Ensure jQuery is available
    if (window.jQuery) {
        // Hamburger menu functionality
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('#nav-menu');
        const navLinks = document.querySelectorAll('#nav-menu a');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                console.log("Hamburger clicked");
                navMenu.classList.toggle('show');
                console.log("Show class toggled:", navMenu.classList.contains('show'));
            });

            // Hide the navigation menu when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    navMenu.classList.remove('show');
                });
            });
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

        // Lightbox functionality for the photo gallery
        const galleryItems = document.querySelectorAll('.gallery-item img');
        const lightbox = document.querySelector('.lightbox');
        const lightboxImage = lightbox.querySelector('img');
        const closeButton = lightbox.querySelector('.lightbox-close');
        const prevButton = lightbox.querySelector('.lightbox-prev');
        const nextButton = lightbox.querySelector('.lightbox-next');
        let currentIndex = 0;

        function openLightbox(index) {
            currentIndex = index;
            lightboxImage.src = galleryItems[currentIndex].src;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
        }

        function showPrevImage() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
            lightboxImage.src = galleryItems[currentIndex].src;
        }

        function showNextImage() {
            currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
            lightboxImage.src = galleryItems[currentIndex].src;
        }

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => openLightbox(index));
        });

        closeButton.addEventListener('click', closeLightbox);
        prevButton.addEventListener('click', showPrevImage);
        nextButton.addEventListener('click', showNextImage);
    } else {
        console.error("jQuery is not loaded");
    }
});