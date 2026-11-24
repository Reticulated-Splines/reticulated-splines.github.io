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

// Thumbnail gallery: click a small image to show it big
const mainImage = document.querySelector('.main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    // Use the same photo, but the large version
    mainImage.src = thumb.src.replace('w=300', 'w=1200');
    mainImage.alt = thumb.alt;
    
    // Move the highlight to the clicked thumbnail
    thumbnails.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

  // Pre-order confirmation
  orderBtn.addEventListener('click', () => {
    const qty = Number(qtyInput.value);
    const total = (qty * price).toLocaleString();

    // Show a message under the button
    let msg = document.querySelector('.order-msg');
    if (!msg) {
      msg = document.createElement('p');
      msg.className = 'order-msg';
      orderBtn.parentElement.after(msg);
    }
    msg.textContent = 'Thanks! ' + qty + ' Synapse Veil reserved for $' + total + '. (Demo only, no payment taken.)';

    // Briefly change the button, then put it back
    orderBtn.textContent = 'Pre-Ordered ✓';
    orderBtn.disabled = true;
    setTimeout(() => {
      orderBtn.disabled = false;
      updateTotal();
    }, 2500);
});
