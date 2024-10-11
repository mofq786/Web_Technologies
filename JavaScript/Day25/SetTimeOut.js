var num = 60;
function fun()
{
    if(num > 0)
    {
        num--;
        document.querySelector("#timer").value=num;
        setTimeout(fun,100);
    }
}