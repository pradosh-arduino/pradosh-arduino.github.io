const terminal_cursor = document.getElementById('cursor');

const blinkInterval = 500; // Blink every 500 milliseconds
let isVisible = true;

function blinkCursor() {
    isVisible = !isVisible;
    terminal_cursor.style.opacity = isVisible ? '1' : '0';
    terminal_cursor.style.transition = 'opacity 0.2s ease-in-out';
}

setInterval(blinkCursor, blinkInterval);