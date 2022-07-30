let sliderElement=document.querySelector("#slider");
let buttonElement=document.querySelector("#button");

let sizePass=document.querySelector("#valor");
let password=document.querySelector("#password");

let lock= document.querySelector("#locker");

let containerPass= document.querySelector("#container-password");

let charset= "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMÇç!@#$%&-_123456789";
let novaSenha="";

sizePass.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePass.innerHTML = this.value;
}

function generatePass(){
    
    let pass= "";

    for(let i=0, n=charset.length; i<sliderElement.value; ++i)
    {
        pass += charset.charAt(Math.floor(Math.random()* n));        
    }
    //console.log(pass);
    containerPass.classList.remove("hide");
    password.innerHTML = pass;   
    novaSenha=pass;
    
}

function copyPass(){    
    navigator.clipboard.writeText(novaSenha).then(()=> alert("Senha copiada com sucesso!"));

}

function showLock(){  
   lock.classList.remove("hide");    

    setTimeout(()=>{
        lock.classList.add("hide");    
    
    },10000);    
}
