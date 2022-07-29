let sliderElement=document.querySelector("#slider");
let buttonElement=document.querySelector("#button");

let sizePass=document.querySelector("#valor");
let Password=document.querySelector("#password");

let containerPass= document.querySelector("container-password");

let charset= "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMÇç!@#$%&-_123456789"
let novaSenha="";

sizePass.innerHTML = sliderElement.value;

slider.oninput =function(){
    sizePass.innerHTML = this.value
}

function gereratePass(){
    let pass="";

    for(let i=0, n=charset.length; i<sliderElement.value; ++i){
        pass+= charset.charAt(Math.floor(Math.random()* n))        
    }
    console.log(pass);
    
}