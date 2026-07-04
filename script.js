const products = [ /* same as before */ ];

let cart = [];

function renderProducts() {
    const container = document.getElementById('products');
    if (!container) return;
    // ... (same rendering logic as before)
}

function addToCart(id) { /* same */ }
function updateCartCount() { /* same */ }
function toggleCart() { /* same */ }
function renderCart() { /* same */ }
function removeFromCart(index) { /* same */ }
function checkout() { /* same */ }

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    
    // Active nav link
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
});
