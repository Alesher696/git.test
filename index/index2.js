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

function countdown(n){
  if(n < 1){
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5))

// function noSpace(x){
//   let y = x.split(' ');
//   return y.join('');
//   }

//   console.log(noSpace('sd sdd sf'))

// function hero(bullets, dragons){
//   //Get Coding!
// let war =  (bullets >= (dragons * 2))  ? true : false;
//    return war;
//   }
//   console.log(hero(100,50))

// let getMsg = (a) =>{
//     let total = ( a == 1) ? 'Player 1 won!' : (a == 2) ? 'Player 2 won!' : 'Draw!';
//     return total;
//     }
    
    
    
//     const rps = (p1, p2) => {
//       if (p1 == 'paper' && p2 == 'rock'){ 
//         return getMsg(1)}else if(
//         p1 == 'scissors' && p2 =='paper'){
//         return getMsg(1)
//         }
      
//     };
//     console.log(rps('scissors','paper'))

// let result = (a,b) => 
// (a + b < 4) ? 'Мало' : 'Много';
// console.log(result(4,5))



// let message;
// let func = (login)=>
// (login == 'Сотрудник') ?
//   message = 'Привет' : (login == 'Директор') ? 
//   message = 'Здравствуйте' : (login == '') ?
//   message = 'Нет логина' : message = '';

// console.log(func("Директор"))




//  const myArr = [2, 3, 4, 5, 6];
// let total = 0;

// for (let i = 0; i < myArr.length; i+=1){
//   total += myArr[i]
// }

// console.log(total)

// let arr = [1,2,3,4,5,6,7]


// const deleteWords = arr.filter((element, index, arr)=>{
//   if(index % 2 == 0){
//     return true;
//   }
// })
// console.log(deleteWords)


// function removeEveryOther(arr){
  
//   const deleteWords = arr.filter((element, index, arr)=>{
//   if(index % 2 == 0){
//     return true;
//   }
// })
//   return deleteWords;
// }
 


// function check(a, x) {

//   for( let i = 0; i < a.length; i++){
//     if (a[i] === x){
//       return true
//     }else return false
    
//     }
//   }
  

//   console.log(check([66,101],101))


function updateLight(current) {
  
  //your code here!

}