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