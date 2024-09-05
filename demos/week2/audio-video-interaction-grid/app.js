console.log("testing");

//how can I select the audio with JS?
const audioPlayer = document.getElementById("audio-player");
console.log(audioPlayer);

//I am selecting all the buttons in my HTML
const playButton = document.querySelector("#play-button");
console.log(playButton);
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const skipButton = document.querySelector("#skip-button");

//let's make the play button play the audio
//we need to add an event to our button
//event handler
function playAudio() {
  audioPlayer.play();
}
//event listener
playButton.addEventListener("click", playAudio);

//let's make the pause button pause the audio
function pauseAudio() {
  audioPlayer.pause();
}

pauseButton.addEventListener("click", pauseAudio);

//let's make the stop button stop the audio
function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

stopButton.addEventListener("click", stopAudio);

//let's make the skip button skip the audio by 2 secs
function skipAudio() {
  audioPlayer.currentTime = audioPlayer.currentTime + 2;
}

skipButton.addEventListener("click", skipAudio);
