// JavaScript for adding products to the cart
function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

// Optional: Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});
