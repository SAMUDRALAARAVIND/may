

// let a = 20 ; // block scoped w
// if(true) {
//     const a = 10; 
//     const b = 90;
//     console.log(a+b);
// }

// if(true){
//     let a  = 20 ;
//     console.log(2*a);
// }
// console.log(3 * a)

// let and const are block scoped var is a context scoped
// console.log(a)
// if(true) {
//     var a = 20 ;
//     console.log(2*a);
// }
// console.log(3*a);

// function callme() {
//     console.log(z);
//     var x = 90 ; // callme context
//     if(true) {
//         let y = 100 ; // block scoped
//         var z = 10 ; // callme context
//         console.log(a , y , z, x) ;
//     }
//     console.log(y) ;
// }
// let a  =  30 ; // global context
// callme();

// {
//     // block 
//     let a = 90 ;
//     console.log(a) // 90
// }
// console.log(a) // not defined error


// class Student {
//     constructor(name, aadhar, type){
//         // this  = {} // #400
//         console.log(this) // 
//         this.name = name ;
//         this.aadhar_number = aadhar ;
//         this.type = type;
//     }
// }

// var s1 = new Student([89, 1, 2], "3893999300", "frontbencher");
// var s2 = new Student("aravind", "372938203" , "backbencher");

// window.alert("Some message");
// let value = window.prompt("Something prompt")
// console.log(value)


// console.log(window.setTimeout)


// console.log(1) // t = 0s
// let func = () => {
//     console.log(4)
// }
// let func1 = () => {
//     console.log(5)
// }

// console.log(2)
// setTimeout(func, 9000); // t = 8ms , t = 9008ms
// setTimeout(func1, 3000); // t = 10ms, t = 3010ms
// console.log(3) // t = 12ms
// console.time("abc") // t = 13ms
// for(let i = 0 ; i < 10e9; i++){
//     // 10e9 => 10*10^9 = 10^10 // 8700ms
// }
// console.timeEnd("abc") // t = 8713ms

// callback_queue = [func]



function makeCounter(){
    let count = 0 ;
    return function(){
        return count++;
    }
}

let counter1 = makeCounter(); // #400, count = 3, counter1 = #400
let counter2 = makeCounter(); // #500, count = 2, counter2 = #500;
console.log(counter1()) // 0
console.log(counter1()) // 1
console.log(counter2()) // 0

console.log(counter1(), counter2()) // 2, 1
