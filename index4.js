// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(b => !geese.includes(b));
//   };



  function digitize(n) {
    //code here
    let arr = n.toString().split('').reverse().map(i => +i)  
 return arr
  }
  console.log(digitize(12345));


  function correct(string)
{
  
  
  let total = string.split('').map(el => el == 0  ? el = "O" : el == 5 ? el= "S" : el == 1 ? el = "I" : el )
	return total.join('')
}
console.log(correct("BUDAPE5T"));