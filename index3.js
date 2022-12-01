let greet = () => "hello world!";

console.log(greet())



function minMax(arr){
  let min = parseInt(Math.min(...arr));
  let max = parseInt(Math.max(...arr));
  let newarr = new Array();
  newarr.push(min, max)

  return newarr
  

}

console.log(minMax([1, 2, 3, 4, 5]))



function invert(array) {
  
  for( let i = 0 ; i< array.length; i++){
    
    array[i] *= -1;
  }
   return array;
}
console.log(invert([1,2,3,-4,5]))




var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!

  let catsum = 0;
  let dogsum = 0;

let catsum_total = () => (humanYears == 1) ? catsum = 15 : (humanYears == 2) ? catsum = 24 : catsum = 24 + ((humanYears -2)*4);
let dogsum_total = () => (humanYears == 1) ? catsum = 15 : (humanYears == 2) ? catsum = 24 : catsum = 24 + ((humanYears -2)*5);

let arr = new Array();

let catint = parseInt(catsum_total());
let dogint = parseInt(dogsum_total());

arr.push(humanYears, catint, dogint);

return arr;



}

console.log(humanYearsCatYearsDogYears(3))






function counter(a) {
  let arr = Array(a)
    .fill()
    .map((el, i) => i + 1);

  let sum = 0;

  let newarr = new Array();

  if (a == 0) {
    return 0;
  } else {
    for (let i = 1; i <= arr.length; i++) {
      sum += i;
      newarr.push(i);
    }

  let total = 0;

  for( i of newarr){
    if( a % i == 0){
      total += 1
    }
  }


    return total;
  }
}
console.log(counter(4));

function squareSum(numbers){
  let arr = 0;
for( let i = 0; i < numbers.length; i++){
   arr += numbers[i] * 2;
}
  return arr
}
console.log(squareSum([0, 3, 4, 5]))




function reverseWords(str) {
  // Go for it
 let a = str.split(' ')
let arr = [];
let newarr = new Array();

for (let i = 0; i < a.length; i++){
    arr = a[i].split('');
    
    

 

}

}


// console.log(reverseWords("Hello brother and sisters"))





let a = "This is an example!";
let b = a.split(" ");
let c = b.map(element => element.split('').reverse().join(""));
let d = c.join(" ")


console.log(d)


function boolToWord(bool) {
return bool == true ? "Yes" : "No"
}

console.log(boolToWord(false));