let indicatePanel = document.getElementById('data');
let clearButton = document.getElementById('clear')
let element = document.getElementById('one')



element.addEventListener('click',numberOne)
clearButton.addEventListener('click', clearData)


function clearData(){
return indicatePanel.value = '';
}
function numberOne(){
  return indicatePanel.value += element.value 
}





// Операции с числами

// let operates = {

//     sum: function(){
//         return this.a + this.b
//     },
//     mul: function(){
//         return this.a * this.b
//     },
//     minus: function(){
//         return this.a - this.b
//     },

//     del: function(){
//         return this.a / this.b
//     }
// }
