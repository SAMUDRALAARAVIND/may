/*
1. error handling
2. Promise concurrency
3. async/await
4. localstorage/sessionStorage/CookieStorage
5. JSON methods
6. Assignments
*/


// let obj = {} ;
// null pointer exception(error)
// console.log(obj.name.fullName)
// let x = undefined ;
// try{
//     console.log("trying")
//     console.log(obj.name.fullName)
//     console.log("trying 2")
// }
// catch(error) {
//     console.log("sjjsj")
// }

// try{
//     console.log("One")
//     console.log(obj.name.fullName) // error
//   // code that may generate an exception/error
// }
// catch(error) {
//   console.log("Inside catch")
// }

// try{
//     let a = 20 ;
//     console.log(2*a) ;
//     // let errorObject = new Error("Custom error message");
//     // throw errorObject;
//     // console.log(x) ; // error
//     console.log("some thing")
// }
// catch(err) {
//     console.log("inside catch")
// }
// finally {
//     console.log("finally")
// }

// stack trace

// class OutOfRangeError extends Error {
//     constructor(message) {
//         super(message);
//     }

// }

// let error = new Error("Sme message");
// console.log(error.message);


// let str = "2 + 3 - #"

// integers, operators, spaces | OutOfRangeError
/*

    2++ - 4 + 8.split() => ["2++", "4", "+", "8"]
*/
// 2 ++ 3, +/ , | InvalidExprError
// 3 + 8 - => Syntax error
// / 4 + 3 => Syntax error (message)

// let operators = ["+", "-", "*" , "/"]

// class OutOfRangeError extends Error {
//     constructor(message){
//         super(message);
//         // this.
//     }
// }

// class InvalidExprError extends Error {
//     constructor(message) {
//         super(message);
//     }
// }

// try {
//     let elements = str.split(" ")
    
//     if(){
//         throw new SyntaxError("Expression should not end with invalid operator")
//     }
//     else if(){
//         throw new InvalidExprError("Expression should not have an invalid combination of expression")
//     }
// }


// "0".charCodeAt(0) < 


let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data1")
    }, 2000) 
})

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("data2")
    }, 1000)
});

let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error3")
    }, 100)
});

// any(resolving) / race(settlment)

// let x = Promise.race([prom1, prom2, prom3])
let x = Promise.any([prom1, prom2, prom3])

x.then((data) => {
    console.log(data)
});

x.catch((data) => {
    console.log("Inside catch", data)
})

// Promise settling

// let x = Promise.allSettled([prom1, prom2, prom3])

// x.then((data) => {
//     console.log("All promises are settled", data)
// })


// prom1.then(() => {
//     console.log("After resolving prom1")
// })


// scenario => execute a piece of code/ function on resolving of 

// prom1.then(() => {
//     console.log("prom1 resolved", prom2);
// })

// let x = Promise.all([prom1, prom2, prom3]);
// x will be resolve when all the promises which we passed gets resolve 

// x will be rejected when atleast one promise in the list gets rejected 
// console.log(x instanceof Promise) // true | false 

// x.then((data) => {
//     console.log("All promises resolved ", data)
// })
// x.catch(error => {
//     console.log(error)
// })

// prom2.then((data) => {
//     console.log("Prom2 resolved", x, data)
// })

// t = 2s (prom1 resolve), t = 3s (prom3 reject), t = 4s (prom2 resolve)

// ordered food => save data into zomato's database(promise) => making payment(promise) => 

// SETTLING A PROMISE => 

// prom(pending) => fullfilled , prom is settled
// prom(pending) => rejected , prom is settled

