let ind1 = '';
let ind2 = '';
let sign = '';


let num = ['1','2','3','4','5','6','7','8','9','0'];
let operands = ['X','+','-','/']


let data = document.querySelector('#data');
let clear = document.querySelector('#clear')
clear.addEventListener('click', ()=>{
  data.textContent = 0
})


let buttons = document.querySelector('#buttons')

buttons.addEventListener('click', function(event){
  if(!event.target.classList.contains('btn')) return;
  if(event.target.classList.contains('ac')) return;
  data.textContent ='';

  const key = event.target.textContent
  if(num.includes(key)){
    ind1 += key;
    data.textContent = ind1;
  }
})

