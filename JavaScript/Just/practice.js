// let x = [1,2,3,4,5]

// x.map((value,index,arr)=>{
//     console.log(value)
// })
// let res = x.filter((value,index,arr)=>{
//     return value%2 === 0;
// })
// console.log(res)



// let data = [
//     {
//         id:1,
//         ename:"Farooq",
//         esalary:40000,
//         eage:22
//     },
//     {
//         id:2,
//         ename:"Omar",
//         esalary:45000,
//         eage:25
//     },
//     {
//         id:3,
//         ename:"Qureshi",
//         esalary:80000,
//         eage:20
//     }
// ]

// let salHike = data.map((emp)=>{
//     return emp.esalary*1.2;
// })
// console.log(salHike);

// let filterEmp = data.filter((emp)=>{
//     return emp.eage >= 22
// })
// console.log(filterEmp);

// let arr = [10,20,30,40,50];

// let res = arr.reduce((accumulator,nextVal)=>{
//     return (accumulator+nextVal)
// })

// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);
// console.log(squares); 

// const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
// const names = users.map(user => user.name);
// console.log(names); 

// const words = ['hello', 'world', 'javascript'];
// const capitalized = words.map(word => word.toUpperCase());
// console.log(capitalized);

// const nums = [1, 2, 3, 4];
// const incremented = nums.map(num => num + 10);
// console.log(incremented);

// const numbers = [1, 2, 3, 4, 5];
// const greaterThanTwo = numbers.filter(num => num > 2);
// console.log(greaterThanTwo); 

// const words = ['cat', 'elephant', 'dog', 'dolphin'];
// const longWords = words.filter(word => word.length > 4);
// console.log(longWords);

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 19 }
//   ];
// const adults = people.filter(person => person.age > 18);
// console.log(adults); 
 
// const values = [0, 1, false, true, '', 'hello'];
// const truthyValues = values.filter(Boolean);
// console.log(truthyValues);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); 

// // const numbers = [1, 2, 3, 4];
// const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log(product); 

// const words = ['Hello', 'World', 'JavaScript'];
// const sentence = words.reduce((accumulator, word) => accumulator + ' ' + word);
// console.log(sentence);

let pr = new Promise((resolve,reject)=>{
    let num = 11;
    if(num%2 === 0)
    {
        resolve("The Number is Even");
    }
    else
    {
        reject("The Number is Odd");
    }
})
pr.then(res => console.log(res));
pr.catch(err => console.log(err))