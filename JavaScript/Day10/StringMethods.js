// var str = "apple";

// console.log(str.slice(0,2));
// console.log(str.slice(2,4));
// console.log(str.slice(2,5));
// console.log(str.slice(-5,-4));
// console.log(str.slice(-4,4));
// console.log(str.slice(-1,1));


// console.log(str.substring(0,2));
// console.log(str.substring(2,4));
// console.log(str.substring(-5,-4));
// console.log(str.substring(-4,4));
// console.log(str.substring(-1,8));
// console.log(str.substring(2,5));

// console.log(str.substr(0,2));
// console.log(str.substr(2,4));
// console.log(str.substr(-5,-4));
// console.log(str.substr(-4,4));
// console.log(str.substr(-1,8));
// console.log(str.substr(2,5));

// var str = "Apple Banana Mango";
// console.log(str.indexOf("a",8));
// console.log(str.lastIndexOf("a"));


var str = `She sells sea shells by the sea shore.
The shells she sells are surely sea shells.
So if she sells shells on the sea shore,
I'm sure she sells seashore shells.`

// console.log(str.length);
// console.log(str.indexOf("shells",15));
// console.log(str.lastIndexOf("shells"));
// console.log(str.replace("a","b"));
// console.log(str.replaceAll("a","b"));
var index = str.indexOf("sells")+6;
str =str.slice(0, index) + str.slice(index).replaceAll("sells","dontsell");
console.log(str);