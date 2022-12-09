'use strict'


let modul = document.getElementById('modul1')


modul.addEventListener('click', ()=>{


let secretModul = document.getElementById("secretModul")
secretModul.style.display = "block"

let closeModul = document.getElementById('closeSecretModul')
closeModul.addEventListener('click', ()=>{

    secretModul.style.display = "none"
})


})