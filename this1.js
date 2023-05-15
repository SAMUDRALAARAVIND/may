// function callme(a, b) {
//     a[0] = 299 ;
//     b = 90;
// }
// let x = [5, 6, 7] , y = 80 ;
// callme(x, y)
// // x = non primitive, y = primitive
// console.log(x, y)

// function test() {
//     console.log(a);
// }
// function one(two, a) {
//     // let two = #200, a ; 
//     console.log(a)
//     a = 100 ;
//     two();
// }
// let a = 123 ;
// one(test);


// this 

// let one = function(a, b, c){
//     return a+b+c ;
// }

// let two = (a , b , c) => 


// console.log(two(10)); // 60
// console.log(one(10, 20, 30)); // 60

// this => globally(this === window)
// locally => 
// console.log(this)
// let obj = {
//     a: 1,
//     b: false,
//     c: function(){
//         console.log(this);
//     },
//     d : {
//         name : "Aravind"
//     },
//     test: {
//         x: 10,
//         y: 20,
//         test1: function(){
//             // this = #600
//             console.log(this)
//         }
//     }
// }
// test = #600


// obj.c();

// whenever you call a function using an object the reference of the object will be there inside that function in the form of this keyword

// function aaa() {
//     console.log("Inside aaa")
// }

// var aaaa = 10 ;

// function aaa() {
//     // this = window
//     console.log(this === window)
// }

// aaa();// window.aaa();

// let obj = {
//     x: 10,
//     y: 20,
//     func2: function(){
//         console.log(this) // obj
//         let child = () => {
//             console.log(this)
//         }
//         child();
//     }
// }
// obj.func2() ;


// let func = () => {
//     console.log(this);
// }

// func();

// function callme() {
//     console.log(this);
//     let obj = {
//         a: 10,
//         b: 20,
//         test: function(){
//             console.log(this);
//             let child = () => {
//                 console.log(this);
//             }
//             child();
//         }
//     }
//     obj.test();
// }

// window.callme();


var func1 = () => {
    console.log(this);
    let obj = {
        x: 10,
        y: 20,
        child: () => {
            console.log(this)
            return () => {
                console.log(this)
            }
        }
    }
    let a = obj.child()
    a();
}
console.log(this.func1);
// func1();

var aaa = 29 ;
function aaaa(){
    console.log("Something");
}

let aaaaa = 90;
this.aaaa();
this.aaaaa();// undefined()