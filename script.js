let cart = [];

const products = [
    { id: 1, name: "PVC Pipe 25mm (10ft)", price: 4500, image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGSY8ENOpxCq0unkjx2wHEIXEhM81MRcBrHuUgU9kZb1xUep-q4NRCfZ-aj4yp82m73ekaEC4c9b8QULlzdhWkbgcod3b_VhMfj04-MKp8tPFNcbX-ZQH2k-Ci696ukNRyiyefTaQ=s680-w680-h510" },
    { id: 2, name: "Chrome Tap Mixer", price: 12500, image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGfBXnRgoFYHRONbCOw_RlqiDb4w36j8RgkNCH6nNiP-HgVyz48UKy7aoJavMIXHJHGjGy_IwaG4Fpm7sl9IOlbkmAxP_GmLU8OQoiqHdu4PUTmRymSucEG4jHC_WrbentkReI=s680-w680-h510" },
    { id: 3, name: "Toilet Repair Kit", price: 8500, image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGAynT48FiYjCHW6J1wHncLyOxOxd9Z_oox41AVYMJtTumsSxCFcO7PQ4y-xq2LNNVtARPVXwChRpYQT5JIb2NQHzJdOqNJMmN-y2hphNbkfcpdThUz_bq5avqS9ZnXxjT6wbbu-6HNknBQ=s680-w680-h510" },
    { id: 4, name: "0.5HP Water Pump", price: 45000, image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFVeC8amx4XU73bNggdo7mjkDNqh9u0_f37J3fvLaQNwApvHEuGuHpzEuUDAquXrJZkeLMcYqy5Yaahc27g0phwV126YF2BD3t1zUP8p3Zn39Q3OAyezPoM3R9ZH15BeleCeG2R=s680-w680-h510" }
];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity = (existing.quantity || 1) + 1;
    else cart.push({...product, quantity: 1});
    updateCartCount();
    alert(product.name + " added to cart!");
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.getElementById('cart-count').textContent = count;
}

function toggleCart() {
    const cartEl = document.getElementById('cart');
    cartEl.style.display = cartEl.style.display === 'block' ? 'none' : 'block';
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    container.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;
        container.innerHTML += `
            <div style="padding:15px;border-bottom:1px solid #eee;display:flex;gap:10px;">
                <img src="${item.image}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;">
                <div style="flex:1;">
                    <div>${item.name}</div>
                    <div>₦${item.price.toLocaleString()} × ${item.quantity||1}</div>
                </div>
                <div style="text-align:right;">
                    <div>₦${itemTotal.toLocaleString()}</div>
                    <button onclick="removeFromCart(${index});" style="color:#dc3545;border:none;background:none;cursor:pointer;">Remove</button>
                </div>
            </div>`;
    });
    document.getElementById('cart-total').textContent = `₦${total.toLocaleString()}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
    updateCartCount();
}

function checkout() {
    if (cart.length === 0) return;
    alert("Thank you! We will call you on 08128038418 to confirm.");
    cart = [];
    updateCartCount();
    toggleCart();
}

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');
    if (productsContainer) {
        products.forEach(product => {
            productsContainer.innerHTML += `
                <div class="card">
                    <img src="${product.image}">
                    <div class="card-body">
                        <h3>${product.name}</h3>
                        <div class="price">₦${product.price.toLocaleString()}</div>
                        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>`;
        });
    }
    updateCartCount();
});
