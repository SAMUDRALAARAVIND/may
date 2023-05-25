
// class Prom {
//     constructor(executor){
//         let f1 = () => {
//             console.log("Inside f1")
//         }
//         let f2 = () => {
//             console.log("inside f2")
//         }
//         executor(f1, f2);
//         // f1 => resolve
//         // f2 => reject
//     }
// } 

// let executor = (a, b) => {// #300
//     // a = function(f1) , b = function(f2)
//     a();
//     b();
// }

// let p1 = new Prom(executor);

// let executor = (resolve, reject) => {
//     // reject();
// }

// let prom1 = new Promise(executor); 
// console.log(prom1);

// every Promise object/instance will have three states 
// i. Pending (intial state)
// ii. fullfilled(later stage)
// iii. rejected(later stage)

// class Prom {
//     constructor(executor){
//         let f1 = () => {
//             console.log("Inside f1")
//         }
//         let f2 = () => {
//             console.log("inside f2")
//         }
//         executor(f1, f2);
//         // f1 => resolve
//         // f2 => reject
//     }
// } 

// Every promise object will have state 
// pending, fullfilled, rejected
// pending => fullfilled/rejected


// whenever the resolve method of a promise object gets invoked the promise state changes from pending -> fullfilled

// whenever the reject method of a promise object gets invoked the promise object state changes from pending => rejected

let executor = function(resolve, reject){
    // console.log(typeof resolve, typeof reject);// function function
    // console.log("inside executor")
    setTimeout(() => { // #200
        console.log(promise) // pending
        reject();// pending -> fullfilled
        console.log(promise) // fullfilled
    }, 4000)
} ;
let promise = new Promise(executor);// promise => pending
console.log(promise) // pending
setTimeout(() => { // #100
    console.log(promise);// pending
}, 3000);
// pending -> fullfilled i wanted to execute success
// pending -> rejected i wanted to execute failure function .
function successCallback() {    
    console.log("Succcess")
}
function errorCallback(){
    console.log("failure")
}
function finallyCallback(){
    console.log("finally")
}
promise.then(successCallback)
promise.catch(errorCallback) // errorCallback willbe printed later
promise.finally(finallyCallback);// finally





/*
using then we can attach a callback function and that callback will be executed when the state of the promise is changed to fullfilled.

using catch method we can attach another callback(function) that will be executed when the state of the promsie is changed to rejected .

using finally method we can attach another callback that will be executed when the state of the promise is changed to either fullfilled/reject[completed]

promise object
pending
1. when user is not connected to the internet(rejected)
2. when server sends the data (fullfilled)
3. when i made a wrong call ( rejected )

to show the loading indicator ()
to show the error message (function)
to show the data (function)
----> dom manipulation

t = 0s i have made a network call
    who makes the network call ? javascript
*/

