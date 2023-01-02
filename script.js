// Script;
let audioContext = new AudioContext();

function playFrequency(frequency, duration) {
  let oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  oscillator.connect(audioContext.destination);
  oscillator.start();

  setTimeout(function () {
    oscillator.stop();
  }, duration * 1000);
}
