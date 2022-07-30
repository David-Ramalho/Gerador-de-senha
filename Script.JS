let sliderElement=document.querySelector("#slider");
let buttonElement=document.querySelector("#button");

let sizePass=document.querySelector("#valor");
let password=document.querySelector("#Pass");

let containerPass= document.querySelector("container-passsword");

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

    containerPass.classList.remove("hide");    
    password.innerHTML = pass;   
    
}

