var circle = document.querySelector("#container")
var timeInterval = 500;
function fun1()
{
    circle.style.transform="translate(90vw)";
    timeInterval = 5000;
}
// setTimeout(fun1,500);
setInterval(fun1,timeInterval);

function fun2()
{
    circle.style.transform="translate(90vw,80vh)";
    timeInterval = 6000;
}
// setTimeout(fun2,1500);
setInterval(fun2,timeInterval -= 4000);

function fun3()
{
    circle.style.transform="translate(0vw,80vh)";
    timeInterval = 7000
}
// setTimeout(fun3,2500);
setInterval(fun3,timeInterval -= 4500);

function fun4()
{
    circle.style.transform="translate(0vw,0vh)";
    timeInterval = 8000
}
// setTimeout(fun4,3500);
setInterval(fun4,timeInterval -= 4000);