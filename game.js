
let secretNumber = Math.floor(Math.random()*20) + 1;

document.querySelector('.letsTry').textContent;

console.log(document.querySelector('.letsTry').textContent);


play.addEventListener("click", function () {
  let a = windowEnter.value;
  if (a > secretNumber) {
    return (document.querySelector(".letsTry").textContent = "More!");
  } else if(a < secretNumber) {return (document.querySelector(".letsTry").textContent = "Less!");
} else if ( a == secretNumber) return (document.querySelector(".letsTry").textContent = "You Won!")
});

play.addEventListener("click", function () {
let b = document.querySelector('#score');
let c = parseInt(b.textContent);
let d = c - 1
return score.textContent = d
})

play.addEventListener("click", function () {
    let a = windowEnter.value;
    let b = score.textContent;
    
    if (a == secretNumber){
        return trying.textContent = b
    }

})

play.addEventListener("click", function () {
  let a = windowEnter.value;
  let center = document.querySelector('.centerInfo')
if ( a == secretNumber){
  center.textContent = "";
   center.append(document.createTextNode(a))
}

})

console.log(document.body.children[1].textContent);