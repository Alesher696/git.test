save.addEventListener('click', function(){
    let task = document.querySelector('#info').value;
    let a = document.createElement('li')
    a.append(document.createTextNode(task))
    ordered.append(a)
})

save.addEventListener('click', function(){
let arr = ['#eb4034',"#62eb34","#34ebcd","#3465eb","#9334eb", "#eb3468" ]
    let setColor = arr[Math.floor(Math.random()*arr.length)]
    
    document.body.style.backgroundColor = setColor
    console.log(setColor);
})

function startError(){

    getError("first")
    

}
function getError(elId){
    let el = document.getElementById(elId)
    if (el.value != "Aleksandr")return el.className = "error";
    
}

let Oncheck = document.getElementById('check');
Oncheck.addEventListener('click',startError )


