// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Привет!"); } :
//   function() { alert("Здравствуйте!"); };

// welcome();

// let func = (num) => num.toString();

// console.log(func(21))
// console.log(typeof(func(21)))




// let total; 
// function makeNegative(num) {
    
//             total = (num < 0) ? num : 
//                 (num == 0) ? num * 0 :
//                 (num > 0) ? num * -1 : num;
//    return total;
//   }
//   console.log(makeNegative(0))




// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     let arr = dna.split('');
//     for( let i = 0; i < arr.length; i++){
//         if(arr[i] == 'T') arr[i] = "U";
//     }
//     return arr.join("");

//   }
// console.log(typeof(DNAtoRNA("TACOTA")))

// function countdown(n){
//   if(n < 1){
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(5))

// function noSpace(x){
//   let y = x.split(' ');
//   return y.join('');
//   }

//   console.log(noSpace('sd sdd sf'))

function hero(bullets, dragons){
  //Get Coding!
   let war =  (bullets >= (dragons * 2))  ? true : false;
   return war;
  }
  console.log(hero(100,50))
