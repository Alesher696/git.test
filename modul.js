"use strict";

let modul = document.getElementById("modul1");
let closeSecretModul = document.getElementById("closeSecretModul");

function ShowModul() {
  let secretModul = document.getElementById("secretModul");
  secretModul.style.display = "block";
}

function CloseModul() {
  secretModul.style.display = "none";
}

modul.addEventListener("click", ShowModul);
closeSecretModul.addEventListener("click", CloseModul);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    CloseModul();
  } else console.log("Not escape");
});
