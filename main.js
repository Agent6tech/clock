let hoursContainer=document.querySelector(".hours");
let minutesContainer=document.querySelector(".minutes");
let secondsContainer=document.querySelector(".seconds");
let periodContainer=document.querySelector(".period");
let message=new Date().getHours() > 12 ? "PM":"AM"; 
function setTime()
{
    hoursContainer.innerText=new Date().getHours()+" hrs";
    minutesContainer.innerText=new Date().getMinutes()+" mins";
    secondsContainer.innerText=new Date().getSeconds()+" sec";
    periodContainer.innerText=message

}
setInterval(()=>
    {
        setTime()
    },1000)
