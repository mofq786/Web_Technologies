// var fun = function(num1,num2)
// {
//     console.log(num1+num2);
// }

// fun(1,2)
 
// var add = function(num1,num2)
// {
//     return num1+num2;
// }

// console.log(add(4,5));

// write a program to find area of triangle.

// var base = prompt("Enter the Base of the triangle");
// var height = prompt("Enter the Height of the triangle");

// var areaOfTriangle = function(base, height)
// {
//     return base*height*0.5;
// };
// console.log(areaOfTriangle(base,height));

// (
//     function(num1,num2)
//     {
//         console.log("This is IIFE "+(num1+num2));
//         (
//             function(name)
//             {
//                 console.log("   This is "+name+" here")
//             }
//         )("Omarfarooq ");
//     }
// )(4,5);

// var fun1 = function()
// {
//     console.log("This is an Anonomous Function");
//     return 9;
// }

// var fun2 = (
//     function()
//     {
//         console.log("This is IIFE")
//         return 45;
//     }
// )();

// console.log(fun1());
// console.log(fun2);

// //First Way
// var arrowFunction = () => {
//     console.log("This is an Arrow function");
// };

// arrowFunction();

// //Second Way
// var arrowFunction2 = () => console.log("This is an Arrow function");

// arrowFunction2();

// //Third Way
// var addFunction = (num1, num2) => console.log(num1+num2);

// addFunction(4,5);

// //Fourth Way
// var addFunction = (num1) => {
//     var num = num1+10;
//     return num;
// }

// console.log(addFunction(4));

// //Fifth Way
// var addFunction2 = num1 => console.log(num1+10);

// addFunction2(10);

// // var subtractFunction = (num1, num2) => return (num1-num2);

var rectangleArea = (length,breadth) => {
    return length*breadth;
}

var triangleArea = (base, height) => {
    return base*height*0.5;
} 

var squareArea = (side) => {
    return side*side;
}

var shadedArea = () => {
    return squareArea(10) - rectangleArea(7,3) - triangleArea(3,10);
}

console.log(shadedArea());