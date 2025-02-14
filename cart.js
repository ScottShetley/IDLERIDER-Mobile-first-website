document.addEventListener('DOMContentLoaded', function() {
    const cartContents = document.getElementById('cart-contents');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContents.innerHTML = '<p>Your cart is currently empty.</p>';
    } else {
        let cartHTML = '<ul>';
        cart.forEach(product => {
            cartHTML += `<li>${product.name} - $${product.price} x ${product.quantity}</li>`;
        });
        cartHTML += '</ul>';
        cartContents.innerHTML = cartHTML;
    }
});