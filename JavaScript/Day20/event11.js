var circle = document.getElementById("circle");
var marLeft=0;
var marRight=0;
var marUp=0;
var marDown=0;

function left()
{
    if(marLeft != 0)
    {
        marLeft -= 5;
        circle.style.marginLeft=marLeft+"vw";
    }
}

function right()
{
    if(marLeft < 95)
    {
        marLeft += 5;
        circle.style.marginLeft=marLeft+"vw";
    }
}

function down()
{
    if(marUp < 35)
    {
        marUp += 5;
        circle.style.marginTop = marUp+"vh";
    }
}

function up()
{
    if(marUp != 0)
    {
        marUp -= 5;
        circle.style.marginTop = marUp+"vh";
    }
}