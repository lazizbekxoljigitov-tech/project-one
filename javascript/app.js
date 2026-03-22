const bars = document.querySelector("#bars__icon");
const menu = document.querySelector(".bars__main");

function menuAll() {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
