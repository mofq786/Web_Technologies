var tab = prompt("Enter the number for Multiplication Table");

// for(i = 1; i <= 10; i++)
// {
//     console.log(tab+" x "+i+" = "+(i*tab));
//     document.getElementById("result").innerHTML += tab+" x "+i+" = "+(i*tab) + "<br>";
// }

i = 1;

while(i <= 10)
{
    console.log(tab+" x "+i+" = "+(i*tab));
    document.getElementById("result").innerHTML += tab+" x "+i+" = "+(i*tab) + "<br>";
    i++;
}