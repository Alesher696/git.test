let greets = () => "hello world!";

console.log(greets())



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


function lovefunc(flower1, flower2){
  // moment of truth
  let flowtrue = flower1 % 2;
  let flowfalse = flower2 % 2;
  let total = flowtrue != flowfalse ? true : false;
  return total
}

console.log(lovefunc(1,4))




/// НЕ РЕШЕНО!!! array.filter ( Нужно другое тело функции)

// function sumArray(array) {
// if (array == 0 || array == null || array ==[]){
//   return 0
// } else{

//   let min = Math.min.apply(null, array);
//   let max = Math.max.apply(null, array);
// let arr = array.filter((el)=> el )
// let newarr = 0
// for(i=0; i< arr.length; i++){
// newarr += arr[i]
// }
// return newarr
// }
//   }


//   console.log(sumArray([ 0, 1, 6, 10, 10 ]))



  function findAverage(array) {
    // your code here

    if (array == 0 || array == null || array == []) {
      return 0;
    } else {
      let sum = 0;

      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum / array.length;
    }
  }
console.log(findAverage([1,2,3,4]))



// function howMuchILoveYou(nbPetals) {
    
//   let arr = {
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly",
//     6: "not at all",
//   };
//  if (nbPetals == 7){ return arr[1]} else if( nbPetals == 8){return arr[2]}
//  else{
//   return arr[nbPetals]
//  }




// }



// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


// function howMuchILoveYou(nbPetals) {
    
//   let obj1 = {
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly",
//     6: "not at all",
//   };
  

// let total = 0;
//   if (arg > 6 ){
    




//     return obj1[total]
//   } else return obj1[nbPetals]


// }
// console.log(howMuchILoveYou(10))


// function testEven(n) {
//   //Your awesome code here!
// if (n < 0 || n % 2 !== 0) {return false} else return true
// }
// console.log(testEven(2))

function sumStr(a,b) {



}


// console.log(sumStr("",2))



  // function greet(language) {
  //   let obj = {
  //     english: "Welcome",
  //     czech: "Vitejte",
  //     danish: "Velkomst",
  //     dutch: "Welkom",
  //     estonian: "Tere tulemast",
  //     finnish: "Tervetuloa",
  //     flemish: "Welgekomen",
  //     french: "Bienvenue",
  //     german: "Willkommen",
  //     irish: "Failte",
  //     italian: "Benvenuto",
  //     latvian: "Gaidits",
  //     lithuanian: "Laukiamas",
  //     polish: "Witamy",
  //     spanish: "Bienvenido",
  //     swedish: "Valkommen",
  //     welsh: "Croeso",
  //     Welcome: "IP_ADDRESS_INVALID",
  //     Welcome: "IP_ADDRESS_NOT_FOUND",
  //     Welcome: "IP_ADDRESS_REQUIRED",
  //   };
  //   for (language in obj) {
  //     return obj[language];
  //   }
      
  //   // return `${obj[language]}. Try again.`;
  // }
  // console.log(greet("Welkom"));

// function sums(a){
//  let sum = 0;
//  for (let i= 0; i < a.length; i++){
//   if(a[i] > 0){
//   sum += a[i]}  
//  }
//  return sum
// }
// console.log(sums([-1, 2,-3,-4,-5]))



// function findSmallestInt(args) {
//  let min = Math.min(...args)
//  return min
// }

// console.log(findSmallestInt([2,3,5]))
let dept1 = [35467,	29842,	38501]
let dept2 = [70533,	50121,	33899]

let getAverage = (dept) =>{
  let midles = 0;
  for( let i=0 ; i < dept.length; i++){
    midles += dept[i] / dept.length
  }
return midles
}

console.log(getAverage(dept2))

let getBonus = (a, b) => {
  if (a > b) {
    let c = a - b;
    let p = (c / b) * 100;
    if (p >= 30) {
      return `The dept1 will get a bonus of ${parseInt(p)}%`;
    } else return "No bonus";
  } else if (b > a) {
    let c = b - a;
    let p = (c / b) * 100;
    if (p >= 30) {
      return `The dept2 will get a bonus of ${parseInt(p)}%`;
    } else return "No bonus";
  }
};

console.log(getBonus(getAverage(dept1), getAverage(dept2)))

// 34603
//51517

let testData = [11, 20, 47];
let chai = new Array();
let sum = new Array();

let chaiFunc = (arr) =>{
let precent = 0;
chai = arr.map(function (el, i, arr) {
  if (el >= 20) {
    precent = (el / 100) * 15;
    return el = precent;
  } else {
    precent = (el / 100) * 20;
    return el = precent;
  }
});

return chai
}

console.log(chaiFunc(testData))





function chaiSum(arr){
sum = arr.map(function(el, i , arr){
 return  el = el + chaiFunc(testData)[i]
})
return sum

}
console.log(chaiSum(testData))

//OBJECTS
let driver = ()=> { 
  if (objectData.driver == true){
    return "Имеtтся водительское"
  } else return "Водить не умеет"
}



let objectData = {
  name: "Youra",
  lastName: "Bublikov",
  job: "svarshik",
  familyMembers: ["Irina", "Petr", "Youra"],
  driver: true,
  ageYear: 1995,
  calAge: function () {
    return 2022 - this.ageYear;
  },
  summary: function () {
    return `Это резюме нашего англичанина из Украины, как вы понимаете зовут претендента ${
      this.name
    } ${this.lastName},
  ${this.ageYear} года рождения, то есть сейчас ему 
  ${this.calAge()}. Работал более 20 лет на должности ${this.job}.
  ${driver()}`;
  },
};


console.log(`${objectData.name} has ${objectData.familyMembers.length} family members and the first one is ${objectData.familyMembers[0]}`)
console.log(objectData.calAge(1995))

console.log(objectData.summary())



const objMike = {
  name : 'Mike',
  lastname : "Vasovsky",
  weight : 40,
  height : 150,
  IMT : function(){
    return (this.weight + this.height) ** 2
  }
}

const objSali = {
  name : 'Sali',
  lastname : "Vangovery",
  weight : 120,
  height : 210,
  IMT : function(){
    return (this.weight + this.height) ** 2
  }
}

let sumIMT = ()=>{
  if (objMike.IMT > objSali.IMT)
  {return " Майк поднабрал в массе"}
  else return "Сали по прежнему мооooнстр"
}

console.log(sumIMT())


function isPalindrome(x) {
  let lowerCase = x.toLowerCase();
  let testArr = lowerCase.split('').reverse().join("")

if (lowerCase === testArr){
  return true
} else return false
}


console.log(isPalindrome("Abba"))