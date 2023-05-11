// let a = 20 ;
// console.log(a);
// console.log(b)
// const b = 90 ;

// console.log(a + b) ;

// when variable inside the temporal deadzone is tried to be accessed the error will be can not access before intialisation.

// let a = 20 ;
// function callme(){
//     // let a = 30 ;
//     console.log(a, b);
// }
// let b = 90;
// callme();
// console.log(a + b);
/*
1) Partial hoisting 
Variables which are declared with let and const keywords will be intialised with `undefined` value during creation phase => partial hoisting.

2) Full Hoisting 
variables which are declared with function keyword wil be intialised with it's actual value during the creation phase itself => fully hoisting.
*/


// let x = 20 ;
// console.log(typeof x)

// let y = "aravind" ;
// console.log(typeof y)

// console.log(z); // x = undefined

// let z = function(){
//     console.log("Inside the function")
// }
// z(); // 

// function callme() {
//     // let a = 1; 
//     let x = function(){
//         console.log(2 * a);
//     }
//     x();
// }
// let a = 78 ;
// callme();

// function callme(a, b){
//     console.log(a + b);
//     return a*b ;
//     // return 200;
// }
// let a = 10 ;
// let result = callme(a, 2*a);
// console.log(result);



console.log(x); // undefined
var x = 20 ;
console.log(x) // 20

// x = undefined