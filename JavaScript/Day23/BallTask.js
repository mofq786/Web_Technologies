var allBalls = document.querySelectorAll(".balls");

function move(val)
{
    val -= 1;
    for(i=0;i<allBalls.length;i++)
    {
        if(val === i)
        {
            allBalls[i].style.marginRight="0.5vw";
            allBalls[i].style.backgroundColor="green"
        }
        else if(i%2 === 0)
        {
            allBalls[i].style.marginRight="78vw";
            allBalls[i].style.backgroundColor="red"
        }
    }
}