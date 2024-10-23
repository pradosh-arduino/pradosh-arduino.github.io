var allButtons = document.querySelectorAll('.current-button');
var keys = document.getElementById('keys');

console.log(allButtons);

function playAllAudio() {
  const audioElements = document.querySelectorAll('#keys');
  audioElements.forEach(audio => audio.play());
}

function stopAllAudio() {
  keys.pause();
  keys.currentTime = 0;
}

allButtons.forEach(button => {
  button.addEventListener('mouseover', playAllAudio, false);
  button.addEventListener('mouseleave', stopAllAudio, false);
});