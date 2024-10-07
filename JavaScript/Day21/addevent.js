var allInp = document.querySelectorAll("input");

allInp[0].addEventListener("click", function(){
    document.body.style.backgroundColor="red";
})

allInp[1].addEventListener("click",blueFunction);

function blueFunction()
{
    document.body.style.backgroundColor="blue";
}

allInp[2].addEventListener("click",()=>document.body.style.backgroundColor="green")