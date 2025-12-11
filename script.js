// Random VHS tracking glitches (very lightweight)
setInterval(() => {
  if (Math.random() > 0.98) {
    document.body.style.transform = 'translateX(-1px)';
    setTimeout(() => document.body.style.transform = '', 50);
  }
}, 5000);