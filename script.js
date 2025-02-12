// Combined functionality for lightbox and hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('#nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });

        // Hide the navigation menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('show');
            });
        });
    }

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

    let lightbox, lightboxImage, closeButton, prevButton, nextButton;

    function createLightbox() {
        lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="" alt="Lightbox Image">
                <span class="lightbox-close">&times;</span>
                <a class="lightbox-prev">&#10094;</a>
                <a class="lightbox-next">&#10095;</a>
            </div>
        `;
        document.body.appendChild(lightbox);

        lightboxImage = lightbox.querySelector('img');
        closeButton = lightbox.querySelector('.lightbox-close');
        prevButton = lightbox.querySelector('.lightbox-prev');
        nextButton = lightbox.querySelector('.lightbox-next');

        closeButton.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
        prevButton.addEventListener('click', () => {
            console.log('Previous button clicked');
            navigateLightbox(-1);
        });
        nextButton.addEventListener('click', () => {
            console.log('Next button clicked');
            navigateLightbox(1);
        });
    }

    function openLightbox(imgSrc) {
        if (!lightbox) {
            createLightbox();
        }
        lightboxImage.src = imgSrc;
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxImage.src = ''; // Clear the image source when closing the lightbox
    }

    function navigateLightbox(direction) {
        const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');
        const currentImgSrc = decodeURIComponent(lightboxImage.src.split('/').pop()); // Extract and decode the relative path
        const galleryArray = Array.from(galleryItems);
        const uniqueGalleryArray = Array.from(new Set(galleryArray.map(item => decodeURIComponent(item.getAttribute('href').split('/').pop())))); // Extract and decode the relative paths
        const currentIndex = uniqueGalleryArray.indexOf(currentImgSrc);

        console.log('Current Index:', currentIndex);
        console.log('Direction:', direction);

        if (currentIndex === -1) {
            console.error('Current image source not found in gallery array:', currentImgSrc);
            return;
        }

        let newIndex = currentIndex + direction;
        if (newIndex < 0) {
            newIndex = uniqueGalleryArray.length - 1;
        } else if (newIndex >= uniqueGalleryArray.length) {
            newIndex = 0;
        }

        console.log('New Index:', newIndex);

        const newImgSrc = uniqueGalleryArray[newIndex];
        console.log('New Image Source:', newImgSrc);
        openLightbox(`images/${newImgSrc}`);
    }
});