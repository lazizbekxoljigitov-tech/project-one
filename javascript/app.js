const bars = document.querySelector("#bars__icon");
const menu = document.querySelector(".bars__main");
const audio = document.querySelector(".audio");
const playe = document.querySelector("#playe");
const pauses = document.querySelector("#pausee");

function playew() {
  if ((playe.style.display = "none")) {
    audio.play();
    pauses.style.display = "inline";
  } else {
    audio.pause();
    playe.style.display = "inline";
  }
}

function pause() {
  if ((pauses.style.display = "none")) {
    audio.pause();
    playe.style.display = "inline";
  } else {
    audio.play();
    pauses.style.display = "inline";
  }
}

function menuAll() {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
