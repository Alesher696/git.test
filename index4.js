// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(b => !geese.includes(b));
//   };

//   function digitize(n) {
//     //code here
//     let arr = n.toString().split('').reverse().map(i => +i)
//  return arr
//   }
//   console.log(digitize(12345));

//   function correct(string)
// {

//   let total = string.split('').map(el => el == 0  ? el = "O" : el == 5 ? el= "S" : el == 1 ? el = "I" : el )
// 	return total.join('')
// }
// console.log(correct("BUDAPE5T"));

let first = document.getElementById("first");

let firstVar = () => {
  let second2 = document.createElement("button");
  second2.textContent = "Да, но не сразу";
  second2.id = "thirst";
  document.body.append(second2);
  let second1 = document.createElement("button");
  second1.textContent = "Конечно да!";
  second1.id = "second";
  document.body.append(second1);

  first.style.display = "none";

  let secondVar = () => {
    let second3 = document.createElement("button");
    second3.id = "third";
    second3.textContent = "Молодец!";
    document.body.append(second3);
    second1.style.display = "none";
    second2.style.display = "none";

    let thirdVar = () => {
      let arr = ["?", "!", ".", "XD", ":D", ":)", "(;"];
      let rand = Math.floor(Math.random() * arr.length);
      second3.textContent = `Молодец ${arr[rand]}`;
    };

    document.getElementById("third").addEventListener("click", thirdVar);
  };

  second2.addEventListener("click", function () {
    second2.style.display = "none";
  });

  document.getElementById("second").addEventListener("click", secondVar);
};

first.addEventListener("click", firstVar);


function findDifference(a, b) {
  //loading...
  let s1 = 1
  let s2 = 1
  
  for(let i = 0 ; i < 3; i++){
s1 *= a[i]
s2 *= b[i]
  }
  let total = s1 - s2
  if (total < 0) {
    return total *= -1 
  }else return total
 
}

console.log(findDifference([7, 9, 21], [18, 14, 16]));