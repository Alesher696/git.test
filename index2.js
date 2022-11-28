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




function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let arr = dna.split('');
    for( let i = 0; i < arr.length; i++){
        if(arr[i] == 'T') arr[i] = "U";
    }
    return arr.join("");

  }
console.log(typeof(DNAtoRNA("TACOTA")))