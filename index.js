
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


// function updateLight(current) {
//   let arr = ["green", "red", "yellow"];
//  return (current == 'green') ? "yellow" : (current == 'yellow') ? "red" : (current == 'red') ? "green" : "yellow"
  
//   }

//   console.log(updateLight('green'))




// //   100000/ 3600
// function cockroachSpeed(s) {
  
// let cm = parseInt((s * 100000) / 3600)
// return cm;

//   }

//   console.log(cockroachSpeed(1.08))




  function rowSumOddNumbers(n) {
    let arr = Array(n).fill().map((el, i) => i+1);
    let summa = arr.reduce(function(sum, elem){
      return sum + elem;
    });

    return summa
    // let newarr = new Array()
    // if( n == 0){return 0}
    // else{for (let i= 1; i <= arr.length; i++){
    //     sum += i;
    //     newarr.push(i)
    // }
    //  ;}
    
    
    

}


console.log(rowSumOddNumbers(2))



// function sum (numbers) {
//     let arr = 0;
//     if( numbers.length <= 0){
//         return 0;
//     } else if ( numbers.length > 0 ){
//     for ( let i = 0; i < numbers.length; i++){
        
//         arr += numbers[i];
        

       
//     }
//     return arr
//     }
    
    
// };


// let newArr = [1,2,3,4]
// console.log(sum(newArr))




  
  // function descendingOrder(n) {
  //   let newarr = ("" + n).split("").map(Number);
  //   newarr.sort(function (a, b) {
  //     return b - a;
  //   });

  //   let arr2 = parseInt(newarr.join(""));

  //   return arr2;
  // }
   
 


  // console.log(descendingOrder(123456))
  // console.log(typeof(descendingOrder(12345)))




  // function abbrevName(name){

//     let socr = name.split(' ')
// let a = "";
// let b = "";

// a += socr[0];
// b += socr[1];

// // a.substring(0,1);
// // b.substring(0,1);





// return `${(a.substring(0,1)).toUpperCase()}.${(b.substring(0,1)).toUpperCase()}`
// }

// console.log(abbrevName('p eskobaro'))



// function litres(time) {
// // за 1 час расход 0.5 литра
// let total = Math.floor(time * 0.5);


//     return total
//   }
//   console.log(litres(12.3))


//   function otherAngle(a, b) {
// let c =  180 - (a + b);


//     return c
//   }
//   console.log(otherAngle(60,50))


//   function reverseString(str) {
//     let newstr = str.split("")
//      let newstr2 = newstr.reverse()
//     let newstr3 = newstr2.join('')
//     return newstr3
      
//     }
    
//     reverseString("hello");
//     console.log(reverseString("hello"))


function past(h, m, s){
  //#Happy Coding! ^_^
  return s * 1000 + m * 60000 + h * 3600000;

}

console.log(past(1,0,1))


function enough(cap, on, wait) {
  // your code here
let a = on + wait;
let b = cap - a;
if (b >= 0){
  return 0
} else return b * (-1)

}
console.log(enough(10,5,10))


function feast(beast, dish) {
  //your function here
  if (
    beast[0] == dish[0] &&
    beast[beast.length - 1] == dish[dish.length - 1]
  ) {
    return true;
  } else return false;
}

let str = '123456789';

let arr1 = str.split('');
let arr2 = arr1.reverse();
let result = arr2.join('');

console.log(result);


