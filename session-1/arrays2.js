// write a program which can extract the sum of digits


// 28929 => 30

// a function is a piece of code which can take some data and does some computation 
// gives you some result 

// let n = 23 ;
// let sum = 0;
// while(n != 0){ 
//     sum += n % 10 ;
//     n = parseInt(n / 10); 
// }
// console.log(sum)

// let n1 = 56 ;
// let sum2 = 0;
// while(n1 != 0){ 
//     sum2 += n1 % 10 ;
//     n1 = parseInt(n1 / 10); 
// }
// console.log(sum2)


// function callMe(a, b){
//     // a , b => parameters
//     console.log(a+ b)
//     // console.log("inside function")
//     return a-b; // 
// }
// let result = callMe(10, 20, 01, 02002, 3883); 
// console.log(result) // -10


// function calculateSumOfDigits(n) {
//     // n = 1098
//     let sum = 0 ;
//     while(n != 0) {
//         sum += n % 10 ;
//         n = parseInt(n / 10);
//     }
//     // sum = 1 + 0 + 9 + 8 = 18
//     return sum ;
// }

// let result1 = calculateSumOfDigits(1098) // 18
// let result2 = calculateSumOfDigits(8282) // 20
// console.log(result1, result2)

// function call(a){
//     // a -> parameter => variable 
//     // let a = 11 ;
//     console.log(a)
// }
// call();
// call(10);
// call(11, 22);




// function callMe(a, b, c) { // 2

//     // a , b , c => parameters
//     // let a = 10, b = 20, c ;
//     // let a = 10, b = 20, c = 30;
//     console.log(a, b , c)
// }

// callMe(10, 20); 
// callMe(10, 20, 30); 

// let a = 10 ;
// a = 20;
// console.log(a)



// let arr = [10, 20, 30]; // 
// // [10, 20, 30, 1, 2, 3]
// arr.push(1, 2, 3);
// console.log(arr)
// // [9, -2, 0, 8, 10, 20, 30, 1, 2, 3]
// arr.unshift(9, -2, 0, 8);
// console.log(arr)
// [10, 20, 30, 90, 88]
// console.log(arr)
// arr.push("aravind")
// console.log(arr)

// let arr = [3, 2, 4] ; // ans = [30, 3, 2 , 4]
// arr.push(30); 

// for(let i = arr.length - 1 ; i >= 1; i--){
//     let temp = arr[i] ;
//     arr[i]  = arr[i-1]; 
//     arr[i-1] = temp ;
// }

// console.log(arr)

// Insert an element at the desired index 

// let arr = [2, 3, 1, 8];// [2, 10, 3, 1, 8]
// let index = 1 , number = 10 ;
// arr.push(number) 
// //     i=1
// // [2, 3, 1, 8, 10]
// // [2, 3, 1, 10, 8]
// // [2, 3, 10, 1, 8]
// // [2, 10, 3, 1, 8]

// for(let i = arr.length - 1 ; i > index; i--){
//     let temp = arr[i];
//     arr[i] = arr[i-1];
//     arr[i-1] = temp ;
// }

// console.log(arr)


// let arr = [1,2, 3, 8, 7, 1, 2, 9];
//                 3     
// let value = arr.push(91); // [1, 2, 3, 91]
// console.log(value)
// let removedElement = arr.pop();
// console.log(removedElement) // 3
// console.log(arr) // [1,2]


// console.log(arr.shift()) // 1
// console.log(arr)
// console.log(arr.slice(0, 3));
// let arr = [1,2, 3, 8, 7];
// //           1        4
// function slice(start, end) {
//     let subArray = []; 
//     for(let i = start ; i < end; i++){
//         subArray.push(arr[i])
//     }
//     return subArray ; // [2, 3, 8]
// }

// console.log(slice(1, 4));

// slice is used to extract a subarray

// splice can manipulate the original array by removing the element
// let arr = [1,2, 3, 8, 7, 1, 2, 9];
// let segment = arr.slice(4, 6)
// console.log(segment)
// console.log(arr)
// let deletedElements = arr.splice(4, 2)
// // [3, 8, 7]
// // [1,2, 1, 2, 9];
// console.log(deletedElements)
// console.log(arr)


// let arr = [9, 4, 8, 1, 3]
// // [9, 4, 3] => [9, 4,11, 12, 19, 3]
// //        2
// arr.splice(2, 2, 11, 12, 19)
// console.log(arr)

[0, 1, 2, 3,4,1,0,2,3,3,4]
            i           j

[0,1,2,3,4,_, _, _,_]