var car = document.querySelector("img");
var horMovement=0;
var verMovement=0;

document.addEventListener("keydown",function(val){
    if(val.key.toLowerCase()=="d")
    {
        horMovement+=5;
        car.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(85deg)`;
    }

    if(val.key.toLowerCase()=="w")
    {
        verMovement -= 5;
        car.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(5deg)`;
    }

    if(val.key.toLowerCase()=="s")
    {
        verMovement += 5;
        car.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(175deg)`;
    }

    if(val.key.toLowerCase()=="a")
    {
        horMovement -= 5;
        car.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(-85deg)`;
    }
})