// Combined functionality for lightbox and hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    // Lightbox functionality for the photo gallery
    const gallery = document.querySelector('.gallery-grid');

    if (gallery) {
        gallery.addEventListener('click', function(event) {
            const target = event.target.closest('[data-lightbox="gallery"]');
            if (target) {
                event.preventDefault();
                const href = target.getAttribute('href');
                if (href) {
                    openLightbox(href);
                } else {
                    console.error('Missing or invalid URL. The href attribute is either null or undefined:', href);
                }
            }
        });
    }

    let lightbox, lightboxImage, closeButton;

    function createLightbox() {
        lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="" alt="Lightbox Image">
                <span class="lightbox-close">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        lightboxImage = lightbox.querySelector('img');
        closeButton = lightbox.querySelector('.lightbox-close');

        closeButton.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
    }
    function closeLightbox() {
        lightbox.classList.remove('open');
    }

    function navigateLightbox(direction) {
        var currentImg = $(".lightbox img").attr("src");
        var galleryItems = $(".gallery-item");
        var currentIndex = galleryItems.map(function() {
            return $(this).attr("href");
        }).get().indexOf(currentImg);

        var newIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
        var newImgSrc = galleryItems.eq(newIndex).attr("href");
        openLightbox(newImgSrc);
    }


    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});

$(document).ready(function() {
    console.log("jQuery is loaded and ready");

    // Show popup message when "Shop" link is clicked
    $("a[href='#featured-products']").click(function(event) {
        event.preventDefault();
        alert("Coming soon!");
    });

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_7ltlnnh', 'template_60oy1on', this)
            .then(() => {
                console.log('SUCCESS!');
                alert("Thank you for your message! We will get back to you soon.");
                document.getElementById('contact-form').reset();
            }, (error) => {
                console.log('FAILED...', error);
                alert("There was an error submitting your message. Please try again later.");
            });
    });

    // Toggle navigation menu on hamburger click
    $("#hamburger").click(function() {
        console.log("Hamburger clicked");
        $("#nav-menu").toggleClass("show");
    });

    // Lightbox functionality
    $(".gallery-item").click(function(event) {
        event.preventDefault();
        var imgSrc = $(this).attr("href");
        openLightbox(imgSrc);
    });

    $(".lightbox-close, .lightbox").click(function(event) {
        if (event.target !== this) return;
        closeLightbox();
    });

    $(".lightbox-prev").click(function() {
        navigateLightbox(-1);
    });

    $(".lightbox-next").click(function() {
        navigateLightbox(1);
    });

    function openLightbox(imgSrc) {
        $(".lightbox img").attr("src", imgSrc);
        $(".lightbox").fadeIn();
    }

    function closeLightbox() {
        $(".lightbox").fadeOut();
    }

    function navigateLightbox(direction) {
        var currentImg = $(".lightbox img").attr("src");
        var galleryItems = $(".gallery-item");
        var currentIndex = galleryItems.map(function() {
            return $(this).attr("href");
        }).get().indexOf(currentImg);

        var newIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
        var newImgSrc = galleryItems.eq(newIndex).attr("href");
        openLightbox(newImgSrc);
    }
});