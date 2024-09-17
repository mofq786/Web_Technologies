// var day = prompt("Enter the index of the day b/w 0 and 6");

// switch(day)
// {
//     case "0": console.log("Sunday");
//     break;
//     case "1": console.log("Monday");
//     break;
//     case "2": console.log("Tuesday");
//     break;
//     default: console.log("Enter the Correct index number b/w 0 and 6");
//     break;
//     case "3": console.log("Wednesday");
//     break;
//     case "4": console.log("Thursday");
//     break;
//     case "5": console.log("Friday");
//     break;
//     case "6": console.log("Saturday");
//     break;
// }

// var num1 = prompt("Enter the first number");
// var num2 = prompt("Enter the second number");
// var op = prompt("Enter the operation to perform");

// switch(op)
// {

// }


/*
1. Write a program that takes a number and check whether the number is positive or negative or zero, if the number is positive find Even number or odd number
*/

// var num = prompt("Enter the number");
// num = Number(num);

// if(num > 0)
// {
//     if(num%2 == 0)
//     {
//         console.log("The number is Positive and Even Number");
//     }
//     else
//     {
//         console.log("The number is Positive and Odd Number");
//     }
// }
// else if(num < 0)
// {
//     console.log("The number is Negative");
// }
// else
// {
//     console.log("The number is Zero");
// }

/*
2. Write a program which takes number and check if the number is palindrome or not.
*/

// var num = prompt("Enter the number");
// num = Number(num);
// var temp = num;
// var reverse = 0;
// while(temp > 0)
// {
//     var lastDigit = parseInt(temp%10);
//     temp = parseInt(temp/10);
//     reverse = (reverse*10) + lastDigit;
// }

// if(reverse == num)
// {
//     console.log("The given number "+num+" is a palindrome number "+reverse);
// }
// else
// {
//     console.log("The given number "+num+" is not a palindrome number "+reverse);
// }

/*
3. Write a program which takes a year and check if the year is leap year or not.
*/

// var year = prompt("Enter the Year: ");
// num = Number(year);

// if(num%4 == 0 || num%400 == 0)
// {
//   if(num%100 == 0 && num%400 !=0)  
//   {
//     console.log("The Year "+year+" is not a leap year");
//   }
//   else
//   {
//     console.log("The year "+year+" is a leap year");
//   }
// }
// else
// {
//     console.log("The year "+year+" is a leap year");
// }


/*
4. Write a program which checks if a given String is palindrome or not.
*/

// var str = prompt("Enter the String: ");

// var reverse = "";

// for(var i=str.length;i>=0;i--)
// {
//     reverse +=str.charAt(i);
// }

// if(reverse === str)
// {
//     console.log("The given String "+str+" is a palindrome String "+reverse);
// }
// else
// {
//     console.log("The given String "+str+" is not a palindrome String "+reverse);
// }

/*
5. Write a program to calculate factorial of a given number by using for loop.
*/

var num = prompt("Enter the Number: ");
num = Number(num);
var factorial = 1;

for(var i = 1; i <= num; i++)
{
    factorial *= i;
}

console.log("Factorial of "+num+" is "+factorial);

