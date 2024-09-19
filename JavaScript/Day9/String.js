// var str = "Thissss is a string";
// console.log(str);


// for(i=0;i<str.length;i++)
// {
//     console.log(str[i]);
// }

// // var str = "This ia string and im writing in multiple dfffffffffffffffff
// // miuiltnkt kjnvkjmvmlmv
// // kjvkmvl;k          mvjvlml";
// // console.log(str);

// var str=`This is template literals
//     in this we can use mutiline statements and 
//     as well as we can use double quotes and single quotes any number
//     of time we will not get any error`;
// console.log(str);

// var num = prompt("Enter the number for multiplication table: ");

// for(i=1;i<11;i++)
// {
//     document.getElementById("multiply_header").innerHTML += `${num} x ${i} = ${num*i}<br>`;
// }


var color = prompt("Enter The Color of the Car: ");
var carName = prompt("Enter The Name of the Car: ");

document.getElementById("text_header").innerHTML = `I Like <span style="color:${color}">${color}</span> color <span style="color:${color}">${carName}</span> car.<br> <img src="./../../assets/images/${carName}.jpeg" alt="" style="width: 200px; height: 200px;">`;