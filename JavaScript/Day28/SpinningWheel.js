var degree = 0;
var wheel = document.getElementById("wheel");
var spinButton = document.getElementById("spin_button");
function rotateWheel()
{
    let random = Math.floor(Math.random()*5000) + 500
    degree = random;
    console.log(degree)
    wheel.style.transform=`rotate(${degree}deg)`;
    spinButton.setAttribute("disabled",true);
    spinButton.style.opacity = "65%";
    setTimeout(reset, 5000)
    
}
function reset(){
    spinButton.removeAttribute("disabled");
    spinButton.style.opacity = "100%";
    wheel.style.transform=`rotate(${0}deg)`;
}