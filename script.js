function showMenu() {
  document.getElementById("navLinks").style.right = "0";
}

function hideMenu() {
  document.getElementById("navLinks").style.right = "-200px";
}
document.addEventListener('DOMContentLoaded', function() {
  const imageButtons = document.querySelectorAll('.image-button');
  const cartItemsList = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');

  let cart = [];

  
  imageButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  function addToCart(event) {
    event.preventDefault();
    const productName = this.dataset.name;
    const productPrice = parseFloat(this.dataset.price);

    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    renderCart();
  }

  function renderCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
      cartItemsList.appendChild(listItem);
      total += item.price * item.quantity;
    });
    cartTotal.innerText = total.toFixed(2);
  }

  // Checkout button functionality
  const checkoutButton = document.querySelector('.checkout');
  checkoutButton.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = []; // Empty the cart after checkout
    renderCart();
  });
});
