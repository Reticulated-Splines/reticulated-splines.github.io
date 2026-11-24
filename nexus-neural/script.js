// Grab the pieces of the page we need
const buttons = document.querySelectorAll('.qty-btn');
const minusBtn = buttons[0];
const plusBtn = buttons[1];
const qtyInput = document.querySelector('.quantity input');
const orderBtn = document.querySelector('.add-to-cart');
const price = 799;

// Update the Pre-Order button to show the total 
function updateTotal() {
  const qty = Number(qtyInput.value);
  const total = (qty * price).toLocaleString();
  orderBtn.textContent = 'Pre-Order Now - $' + total;
}

plusBtn.addEventListener('click', () => {
  qtyInput.value = Number(qtyInput.value) + 1;
  updateTotal();
});

minusBtn.addEventListener('click', () => {
  if (Number(qtyInput.value) > 1) {
    qtyInput.value = Number(qtyInput.value) - 1;
    updateTotal();
  }
});

// If someone types a number in directly, keep it valid
qtyInput.addEventListener('change', () => {
  if (Number(qtyInput.value) < 1) qtyInput.value = 1;
  updateTotal();
});
