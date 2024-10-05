var num = 0;
var cont = document.getElementById("container");

function fun()
{
    num++;
    if(num == 1)
    {
        cont.style.backgroundImage="url(../../assets/images/space.jpg)";
        cont.style.backgroundPosition="-2000px -2000px";
    }
    else if(num == 2)
    {
        cont.style.backgroundImage="url(../../assets/images/BMW.jpeg)";
        cont.style.backgroundPosition="2000px 2000px";
    }
    else if(num == 3)
    {
        cont.style.backgroundImage="url(../../assets/images/Landscape.jpg)";
        cont.style.backgroundPosition="2000px -2000px";
    }
    else if(num == 4)
    {
        cont.style.backgroundImage="url(../../assets/images/Nature.jpg)";
        cont.style.backgroundPosition="-2000px 2000px";
    }
    else
    {
        cont.style.backgroundImage="url(../../assets/images/daySky.jpg)";
        cont.style.backgroundPosition="4000px -2000px";
        num = 0;
    }
    
}