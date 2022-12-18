let home = document.querySelector('.home')
let drop = document.querySelector('.drop')
function dropShow(){
    if(drop.style.display = 'none'){
        return drop.style.display ='block'
    }
}

function dropClose(){
    if(drop.style.display = 'block'){
        return drop.style.display ='none'
    }
}

home.addEventListener('mouseenter', dropShow)
home.addEventListener('mouseleave', dropClose)