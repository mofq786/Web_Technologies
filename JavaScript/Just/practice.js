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

let arr = [10,20,30,40,50];

let res = arr.reduce((accumulator,nextVal)=>{
    return (accumulator+nextVal)
})

console.log(res);
