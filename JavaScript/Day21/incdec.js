var num = 1;
document.addEventListener("keydown",function(val){
    
    if(val.key=="+" && num >=1 && num < 10)
    {
        num++;
        document.getElementById("value").innerHTML=num;
    }
    else if(val.key=="-" && num >1 && num <= 10)
    {
        num--;
        document.getElementById("value").innerHTML=num;
    }
})