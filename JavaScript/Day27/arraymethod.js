// function fun(){
//     console.log("This is a callback function");
// }

// function higherOrderFun(callback)
// {
//     console.log("This is a Higher Order Function");
//     callback();
// }

// higherOrderFun(fun)

// var arr = [45,4,5,78,65,42,54,62,15,34,79];

//By Using Named Function
// var arr1 = arr.filter(fil);
// function fil(ar){
//     return ar >= 15 && ar <= 78;
// }
// console.log(arr1);

// By Using Anonomous Function
// var arr1 = arr.filter(function(ar){
//     return ar >= 15 && ar <= 78;
// });
// console.log(arr1);

//By Using Array Function
// var arr1 = arr.filter(ar=>{
//     return ar%2 === 0;
// });
// console.log(arr1);
// var arr = ["apple","Banana","grapes","Pineapple","mango","watermelon","red","green","blue","orange"];

// var filteredArray = arr.filter( str => {
//     return str.length > 5;
// } )
// console.log(filteredArray)

var arr = ["apple","Banana","grapes","Pineapple","mango","watermelon","red","green","blue","orange"];

// var arr1 = arr.map(arr=>{
//     return "I like "+arr
// })
// console.log(arr1)

// for (n in arr) {
//     console.log(n);
//     console.log(arr[n]);
// }
// var arr1 = arr.keys()
// var arr1 = arr.values()
// var arr1 = arr.entries()
// for(n of arr1)
// {
//     console.log(n);
    
// }
var arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12,[13,14,15,[16,[17,18]]]]]]];
console.log(arr);
var arr1 = arr.flat(Infinity)
