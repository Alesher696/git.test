
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
  let arr = ["green", "red", "yellow"];
 return (current == 'green') ? "yellow" : (current == 'yellow') ? "red" : (current == 'red') ? "green" : "yellow"
  
  }

  console.log(updateLight('green'))




//   100000/ 3600
function cockroachSpeed(s) {
  
let cm = parseInt((s * 100000) / 3600)
return cm;

  }

  console.log(cockroachSpeed(1.08))




  function rowSumOddNumbers(n) {
    let arr = Array(n).fill().map((el, i) => i+1);
    let sum = 0;
    if( n == 0){return 0}
    else{for (let i= 0; i < arr.length; i++){
        sum += i;
    }
    return sum ;}
    
    
    

}


console.log(rowSumOddNumbers(42))



