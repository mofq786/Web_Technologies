// var emp1=["Farooq","MS786","Male","250000",true];
// console.log(emp1);
// console.log(typeof emp1);

// emp1.forEach(element => {
//     console.log(element);
//     console.log(typeof element);
// });

// var arr = []
// arr[0] = "Apple"
// arr[2] = "Mango"
// console.log(arr)

// var arr = new Array("red","green","blue","orange",5.5)
// console.log(arr)

// var str = "Apple Mango Banana Pineapple";
// console.log(str);
// console.log(typeof str);

// var arr = str.split(" ");
// console.log(arr)

// var arr = ["Apple", "Mango", "Banana", "Pineapple"];
// console.log(arr);
// var str = arr.join(" Hona ");
// console.log(str)

// var arr = ["Apple", "Mango", "Banana", "Pineapple"];
// // var str = arr.toString().replaceAll(",", " ");;
// // console.log(str);
// var arrRev = arr.reverse();
// console.log(arrRev)

// var str = `she sells seashells by the seashore, the shells she sells are surely seashells. so if she sells shells on the seashore, I'm sure sells seashore shells.`
// var arr = str.split("");
// console.log(arr);
// arr =arr.reverse();
// str = arr.join("");
// console.log(str)

var arr = ["Apple", "Mango", "Banana", "Pineapple"];
console.log(arr);
arr.pop()                 // for end items deletion
arr.push("BlueBerry")     // for inserting from end
arr.shift()               // for start items deletion
arr.unshift("Watermelon") // for inserting from start
console.log(arr);