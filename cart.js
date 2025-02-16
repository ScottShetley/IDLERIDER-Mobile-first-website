document.addEventListener('DOMContentLoaded', function () {
    if (window.jQuery) {
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

        // Call updateCartContent on page load
        updateCartContent();

        // Add event listeners for cart page buttons
        if (document.getElementById('clear-cart')) {
            document.getElementById('clear-cart').addEventListener('click', function() {
                clearCart();
            });
        }

        if (document.getElementById('checkout')) {
            document.getElementById('checkout').addEventListener('click', function() {
                window.location.href = 'checkout.html'; // Redirect to the checkout page
            });
        }

        // Clear cart
        function clearCart() {
            localStorage.removeItem('cart');
            updateCartContent();
        }
    } else {
        console.error("jQuery is not loaded");
    }
});