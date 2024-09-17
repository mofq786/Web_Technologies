// var hh = prompt("Enter the Hr in 24Hrs Format");
// var am_pm = "AM";

// if(hh >= 12)
// {
//     am_pm = "PM";

//     if(hh >= 13)
//     {
//         hh -= 12;
//     }

// }

// if(hh == 0)
// {
//     hh = 12;
// }

// console.log(hh+":00 "+am_pm);

// if-else

// var num = prompt("Enter the Number: "); 

// if((num&1) == 0)
// {
//     console.log(num+" is an Even Number");
// }
// else{
//     console.log(num+" is an Odd Number");
// }

// if-else ladder

// var gfName = prompt("Enter the GF name");
// if(gfName == "X")
// {
//     console.log("OG married life is happy");
// }
// else if(gfName == "Y")
// {
//     console.log("OG married life is happy");
// }
// else if(gfName == "Y")
// {
//     console.log("OG married life is happy");
// }
// else if(gfName == "Y")
// {
//     console.log("OG married life is happy");
// }
// else
// {
//     console.log("No Love marriage life is happy only with Arrange marriage");
// }

// Write a program to print fizz if it is multiple of 2, buzz if it is multiple of 3, fizz-buzz if it is multiple of 3 and 2; for this the range is 0 to 100

for(var i=0;i <= 100; i++)
{
    if(num%2 == 0 && num%3 == 0)
    {
            console.log("fizz-buzz");
    }
    else if(num%2 == 0)
    {
        console.log("fizz");
    }
    else if(num%3 == 0)
    {
        console.log("buzz");
    }
     else{
        console.log(num);
    }
}

var num = 0;

while(num <= 100)
{
    if(num%2 == 0 && num%3 == 0)
    {
        console.log("fizz-buzz");
    }
    else if(num%2 == 0)
    {
        console.log("fizz");
    }
    else if(num%3 == 0)
    {
        console.log("buzz");
    }
     else{
        console.log(num);
    }
    num++;
}