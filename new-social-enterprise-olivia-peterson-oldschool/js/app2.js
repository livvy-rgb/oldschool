const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`
            }
        });

        burger.classList.toggle('toggle');

    });
   

}

navSlide();


const text = document.querySelector(".text-animation");
const strText = text.textContent;
const splitText = strText.split(""); 
text.textContent = "";

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" +  splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick (){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}


function message (){
    var Name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");

    if(Name.value === "" || email.value === "" || message.value === ""){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = "";
            email.value = "";
            message.value = "";
        }, 2000);

        success.style.display = 'block';

    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}




