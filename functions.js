// [3, 4, 12, 8]

// [3, 4, 8, 12] // increasing order

// [12, 8, 4, 3]


// "aravind" , "janu" , "arjun", "bhawna"

// "aravind" ,  "arjun", "bhawna", "janu"

// let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// ["Virupaksha Temple", 'Victoria Memorial', 'Tajmahal']

// ['Tajmahal', 'Victoria Memorial', 'Virupaksha Temple']
// ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple']

// let a  = 20 ;
// function callme(a){
//     let test = function(){
//         console.log(2*a);// 120
//     }
//     return test ;
// }
// let result = callme(3*a); 
// result();
// closure

// let a = 20;
// function one(two, a){
//     let func = function(a){
//         two();
//         console.log(a);
//     }
//     return func ;// #400
// }
// let x = function(){
//     console.log(a+3);
// }
// let result = one(x, a+2) ; // #400
// result(28428); // #400

// let b = 200 ;
// function callme(b) {
//     // b = 400;
//     let a = 900; 
//     return function(){ 
//         console.log(a+b) // a = 900,  b = 400
//     }
// }
// callme(2*b)();

// let arr = [5, 6, 4, 5];
// let callback = function(element, index, list){
//     console.log(element, index, list)
// }
// arr.forEach(callback)
// function forEach(x) {
//     // x = #500 = function
//     for(let i = 0 ; i < arr.length; i++){
//         x(arr[i], i, arr);
//     }
// }
// let something = function(element, index, list){
//     console.log(element, index, list)
//     // 5, 0, [5, 6]
//     // 6, 1, [5, 6]
// } // #500 = function

// forEach(something) // something = #500


// map method

// let arr = [5, 6];
// function map(callback){
//     let aggrigatedArray = []
//     for(let i = 0 ; i < arr.length; i++){
//         let result = callback(arr[i], i, arr);
//         // let result = callback(5, 0, [5, 6])
//         // let result = callback(6, 1, [5, 6])
//         aggrigatedArray.push(result);
//     }
//     return aggrigatedArray; // []
// }

// let output = map(function(element, index, list){
//     return element + index ;
// });
// console.log(output)

// let output = arr.map(function(element, index, list) {
//     return 2*element + index ;
// })
// console.log(output)
// [10, 13]


// FILTER
// let arr = [5, 6, 4, 7];
// function filter(callback){
//     let aggrigatedArray = []; // [6, 4]
//     for(let i = 0 ; i < arr.length; i++){
//         let result = callback(arr[i], i, arr);
//         // false , true, true, false
//         if(result === true){
//             aggrigatedArray.push(arr[i]);
//         }
//     }
//     return aggrigatedArray;// [6, 4]
// }

// let output = filter(function(element, index, list){
//     return (element % 2 === 0);
// })
// console.log(output) // [6, 4]

// let output = arr.filter(function(element){
//     return element % 2 !== 0 ;
// });

// console.log(output)

let arr = [5, 3] ;
function reduce(callback, intialValue) {
    // initialValue = undefined
    let sum ;
    let intialIndex ;
    if(intialValue === undefined){
        sum = arr[0];
        intialIndex = 1 ;
    }
    else{
        sum = intialValue;
        intialIndex = 0 ;
    }
    // sum = 10 = 15 = 19
    for(let i = intialIndex ; i < arr.length; i++) {
        sum = callback(sum, arr[i], i); 
        // 15 = callback(10, 5, 0)
        // 19 = callback(15, 3, 1 )
    }   
    return sum ;
}

let output = reduce(function(prev, element, index){
    return prev + element + index
}, 10) ;

console.log(output)

// let arr = [5, 3, 2, 4] ;
let output2 = arr.reduce(function(previousValue, element, index){
    return previousValue + element + index;
}, 10);
// 8 + 5 + 2 + 0 + 1 = 16
console.log(output2)
