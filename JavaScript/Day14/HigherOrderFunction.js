// function fun()
// {
//     console.log("This is CallBack function 1");
// }
// function fun()
// {
//     console.log("This is CallBack function 2");
// }
// function fun()
// {
//     console.log("This is CallBack function 3");
// }

// function highfun(callbackFun1,callbackFun2,callbackFun3)
// {
//     callbackFun1();
//     callbackFun2();
//     callbackFun3();
//     console.log("This is Higher Order function");
// }

// highfun(fun,fun,fun);


// function higherOrderFunction(func)
// {
//     console.log("this is higher order function");
//     func();
// }

// higherOrderFunction(function(){
//     console.log("this is a callback function");
// })

// Nested Functions

function parent()
{
    console.log("This is a parent function");

    function child()
    {
        console.log("This is a child function");
    }

    return child;

}

var childFun = parent();
childFun();
