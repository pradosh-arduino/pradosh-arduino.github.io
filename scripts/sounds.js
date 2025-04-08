var allButtons = document.querySelectorAll('.current-button');
var tablinks = document.querySelectorAll(".tablinks");
var keys = document.getElementById('keys');

console.log(tablinks);

function playKeysAudio() {
  const audioElements = document.querySelectorAll('#keys');
  audioElements.forEach(audio => audio.play());
}

function playPositiveAudio() {
  const audioElements = document.querySelectorAll('#ui-positive');
  audioElements.forEach(audio => audio.play());
}

function stopKeysAudio() {
  keys.pause();
  keys.currentTime = 0;
}

allButtons.forEach(button => {
  button.addEventListener('mouseover', playKeysAudio, false);
  button.addEventListener('mouseleave', stopKeysAudio, false);
});

tablinks.forEach(button => {
  button.addEventListener('click', playPositiveAudio, false);
});