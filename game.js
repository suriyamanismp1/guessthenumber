var randomNumber = Math.round(Math.random()*100);
var sumbitButton =document.getElementById("submit");
var message = document.getElementById("message");
let msg;
let live=document.getElementById("lives");
let a=10;

sumbitButton.onclick = ()=> {
    a--;
    let b=a;
    let inputNumber= document.getElementById("number-input").Value;
    if(inputNumber == randomNumber)
    {
        location.href="./won.html";
    }
    else if(inputNumber > randomNumber)
    {
        msg ="Oops! you guess is high!"
    }
    else if(inputNumber < randomNumber)
    {
        msg= "Oops! you guess is low!"
    }
    else if(a==1)
    {
            sumbitButton.onclick=()=>
            {
                location.href="./loss.html";
            }
    }
    message.style.display="inherit";
    message.innerHTML=msg;
    lives.innerHTML=a,"lives";
}