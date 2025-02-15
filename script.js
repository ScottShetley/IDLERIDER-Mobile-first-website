// Combined functionality for lightbox, hamburger menu, and form submission
document.addEventListener('DOMContentLoaded', function () {
    // Ensure jQuery is available
    if (window.jQuery) {
        // Handle contact form submission
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('message').value;

            fetch('https://script.google.com/macros/s/AKfycbwqYtQy9TugvsyBcUXxJu5hPHePyfC-A3bXlDlL0vj5MqZUwsqVhH8ouXiRsHpuGM3N/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, email: email, message: message })
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    alert("Thank you for your message! We will get back to you soon.");
                    document.getElementById('contact-form').reset();
                } else {
                    alert("There was an error sending your message. Please try again later.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("There was an error sending your message. Please try again later.");
            });
        });

        // Handle newsletter form submission
        document.getElementById('newsletter-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('newsletter-name').value;
            const email = document.getElementById('newsletter-email').value;

            fetch('https://script.google.com/macros/s/AKfycbwqYtQy9TugvsyBcUXxJu5hPHePyfC-A3bXlDlL0vj5MqZUwsqVhH8ouXiRsHpuGM3N/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, email: email })
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    alert("Thank you for signing up! Your information has been saved.");
                    document.getElementById('newsletter-form').reset();
                } else {
                    alert("There was an error signing up. Please try again later.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("There was an error signing up. Please try again later.");
            });
        });

        // Smooth scroll for all navigation links
        $('#nav-menu a').click(function(event) {
            event.preventDefault();
            const target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });

        // Add to cart functionality
        $('.add-to-cart').off('click').on('click', function() {
            const productCard = $(this).closest('.product-card');
            const productId = productCard.data('id');
            const productName = productCard.data('name');
            const productPrice = productCard.data('price');
            const productImage = productCard.find('img').attr('src'); // Get the product image URL

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProduct = cart.find(product => product.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, image: productImage, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartContent();
            openCartWindow();
        });

        // Handle close cart button click
        document.getElementById('close-cart').addEventListener('click', function() {
            closeCartWindow();
        });

        // Handle clear cart button click
        document.getElementById('clear-cart').addEventListener('click', function() {
            clearCart();
        });

        // Handle view cart button click
        document.getElementById('view-cart').addEventListener('click', function() {
            window.location.href = 'cart.html'; // Redirect to the cart page
        });

        // Update cart content
        function updateCartContent() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartContent = document.querySelector('.cart-content');
            cartContent.innerHTML = '';

            cart.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('cart-item');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name} - $${product.price} x ${product.quantity}</p>
                `;
                cartContent.appendChild(productElement);
            });
        }

        // Open cart window
        function openCartWindow() {
            document.getElementById('cart-window').classList.add('open');
            document.getElementById('cart-overlay').classList.add('active'); // Show overlay
        }

        // Close cart window
        function closeCartWindow() {
            document.getElementById('cart-window').classList.remove('open');
            document.getElementById('cart-overlay').classList.remove('active'); // Hide overlay
        }

        // Clear cart
        function clearCart() {
            localStorage.removeItem('cart');
            updateCartContent();
            closeCartWindow();
        }
    } else {
        console.error("jQuery is not loaded");
    }
});