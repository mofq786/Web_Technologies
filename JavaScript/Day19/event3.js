function fun()
{
    var colors = document.getElementById("color").value;
    var degree = document.getElementById("deg").value;

    document.body.style.backgroundSize="100% 100vh";
    document.body.style.backgroundImage=`linear-gradient(${degree}deg,${colors})`;
}

var a = "apple";
