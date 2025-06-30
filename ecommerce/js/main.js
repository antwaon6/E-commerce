function validateLogin() {
    const Validusername = "gowrav";
    const Validpassword = "1694";

    const inputusername = document.getElementById('username').value;
    const inputpassword = document.getElementById('pass').value;

    if (Validusername === inputusername && Validpassword === inputpassword) {
        window.location.href = "product.html";
    } else {
        alert("Enter correct values, baka.");
    }

    return false;
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p class='empty'>Your cart is empty. Go add something!</p>";
    return;
  }

  cart.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'cart-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-details">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

window.addEventListener('DOMContentLoaded', () => {
  // Only run cart loader if on cart page
  if (document.getElementById('cart-items')) {
    loadCart();
  }

  // Add to Cart logic
  const buttons = document.querySelectorAll(".add-btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = button.dataset.price;
      const img = button.dataset.img;

      const product = { name, price, img };
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${name} added to cart!`);
    });
  });
});
