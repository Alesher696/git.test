let secretNumber = Math.floor(Math.random() * 20) + 1;

// document.querySelector(".letsTry").textContent;

// console.log(document.querySelector(".letsTry").textContent);

play.addEventListener("click", function () {
  let b = document.querySelector("#score");
  let c = parseInt(b.textContent);
  let d = c - 1;
  return (score.textContent = d);
});

play.addEventListener("click", function () {
  let a = windowEnter.value;

  if (a > secretNumber) {
    return (document.querySelector(".letsTry").textContent = "More!");
  } else if (a < secretNumber) {
    return (document.querySelector(".letsTry").textContent = "Less!");
  } else if (a == secretNumber) {
    return (document.querySelector(".letsTry").textContent = "You Won!");
  }
});

play.addEventListener("click", function () {
  let a = windowEnter.value;
  let b = score.textContent;

  if (a == secretNumber) {
    return (trying.textContent = b);
  }
});

play.addEventListener("click", function () {
  let a = windowEnter.value;
  let center = document.querySelector(".centerInfo");
  let inp = document.getElementById("windowEnter");
  if (a == secretNumber) {
    center.textContent = "";
    center.append(document.createTextNode(a));
    document.body.style.backgroundColor = "green";
    inp.style.backgroundColor = "green";
  }
});

console.log(document.body.children[1].textContent);

play.addEventListener("click", function () {
  let b = document.querySelector("#score").textContent;
  let inp = document.getElementById("windowEnter");
  if (parseInt(b) <= 0) {
    document.querySelector(".letsTry").textContent = "You Lose!";
    document.body.style.backgroundColor = "red";
    inp.style.backgroundColor = "red";
    document.querySelector("#score").textContent = "";
  }
});



let playAgain = document.getElementById("again");
playAgain.addEventListener('click', function(){
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "black";
  let inp = document.getElementById("windowEnter");
  inp.style.backgroundColor = "black";
  let center = document.querySelector(".centerInfo");
  center.textContent = "???";
  document.querySelector(".letsTry").textContent = "Let's start!";
  document.querySelector('#score').textContent = '20'


})