window.onload = function () {};

let nextLink = document.querySelector(".nextlink"),
  instrumentHeader = document.querySelector("#main-instrument-intro-header"),
  instrumentTypes = document.querySelector("#main-musical-instrument-types"),
  prev = document.querySelector("#prev"),
  cook = document.getElementById("cookies"),
  cookiesBtn = document.getElementById("cookies-btn"),
  bars = document.querySelector(".bars"),
  navList = document.querySelector("#nav-list");

nextLink.addEventListener("click", function () {
  instrumentHeader.classList.add("hide");
  instrumentTypes.classList.add("show");
  nextLink.style.opacity = "0";
});

prev.addEventListener("click", () => {
  instrumentHeader.classList.remove("hide");
  instrumentTypes.classList.remove("show");
  nextLink.style.opacity = "1";
});
let is = false;
bars.addEventListener("click", () => {
  if (is == false) {
    navList.style.display = "flex";
    navList.style.zIndex = "12323";
    is = true;
  } else if (is == true) {
    navList.style.display = "none";
    is = false;
  }
});

let t = setTimeout(() => {
  cook.classList.add("appear");
  cook.style.zIndex = "23233";
}, 3000);

cookiesBtn.addEventListener("click", () => {
  cook.classList.remove("appear");
  cook.style.display = "none";
});
