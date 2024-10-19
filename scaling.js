const neofetchBox = document.querySelector('.neofetch-box');

function isMobileDevice() {
  const userAgent = navigator.userAgent;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Windows Phone|Silk|Kindle|Opera Mobi|Nokia|Symbian OS|MAUI|UC Browser|Unico Browser|Mini Browser|Dolphin|Blazer|NetFront|Teleca|Ericcson|SonyEricsson|Symbian OS|Nintendo DS|Nintendo 3DS|Nintendo Switch/;
  return mobileRegex.test(userAgent);
}

function handleResize() {
  if (window.innerWidth <= 653) {
    neofetchBox.style.display = 'none';
  } else {
    neofetchBox.style.display = 'block';
  }
}

window.addEventListener('resize', handleResize);

handleResize();

if (isMobileDevice()) {
  neofetchBox.style.display = 'none';
} else {
  neofetchBox.style.display = 'block';
}