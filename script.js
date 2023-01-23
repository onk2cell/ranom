
var musicLinks = ["http://65.186.78.52/MUSIC/ORIG/T/Top%20Hits/Top%20100%20Hits%20of%20the%2080s/014)%20Van%20Halen%20-%20Jump%20%5bFebruary%201984%5d.mp3"];

function playRandomMusic() {
  var randomIndex = Math.floor(Math.random() * musicLinks.length);
  var randomLink = musicLinks[randomIndex];
  var audio = new Audio(randomLink);
  audio.volume = 1;
  audio.play();
  document.body.style.backgroundColor = "black";
}

document.addEventListener("DOMContentLoaded", playRandomMusic);

