const neofetchBox = document.querySelector('.neofetch-box');

function handleResize() {
  if (window.innerWidth <= 568) {
    neofetchBox.style.display = 'none';
  } else {
    neofetchBox.style.display = 'block';
  }
}

window.addEventListener('resize', handleResize);

handleResize();