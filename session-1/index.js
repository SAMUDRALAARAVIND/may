// arrays

// let a = "aravind";
// let b = 22 ;
// homogenious => same type 
// heterogenious => different types
// let arr = ["aravind", 22, 34]
//             0      1    2
//  indexing => zero based indexing
// console.log(arr[1], arr[0])
// int arr[] = new int[10]
// 23, 23.4, 97831894731871347
// console.log(typeof arr[0])

// let n = arr.length;
// console.log(n)
// console.log(arr[-1])

// let n = 1234567; // 
// // 1 + 9 + 8 + 4 + 3 + 2 = 27
// // comupte the sum of all digits in this number 

// // n = 12 => n % 10 => 2
// // 12/10 => 1.2 => 1
// // n = 1 => n % 10 => 1
// // 1 / 10 => 0.1 => 0
// let sum = 0; // 0 => 2 + 3 => 5 + 4 => 9
// while(n !== 0) { // 0 !== 0
//     let digit = n % 10 ; // 1984 % 10 => 4
//     sum += digit ;
//     n = parseInt(n / 10) ; // 1984 / 10 => 198.4 => 198
// }
// console.log(sum)

// console.log(10 === 10)
// console.log("2" === 2)
// value(10) , value(10)
// typeof 10 == typeof 10
// ==   => compares the values of the operands
// ===  => compares the value along with data type /.

// let n = 12321 ; // palindromic number 
// 12321
// 12321
// palindrome ??
// write a program in js to find wether a number is palindrome or not 

// let n = 123 ; // 3 * 1 + 2 * 10 + 1 * 100
// let m = 0 ; // 3*100 + 2 * 10 + 1 * 1  = 321

// 3 * 1 + 2 * 10 
// 3 * 10^(3-1) + 2 * 10^(3 -2) + 1 * 10^(3-3)

// n = 121
// m = 121 
// n === m


// m = 0
// x = 1 => 10 => 100
// n = 1
// // 32
// m = 3*10 + 2 = 32
// m = 32*10 + 1 = 321
// m += 3*x => m = 3 => x * 10 => x*10
// m = m*x + 2 => 3 * 10 + 2 => 32
// m = m*x


// let n = 123 ;// 12
// let x = n ; // x = 123
// let m = 0;// 3
// while(n != 0) {
//     m = m*10 + n % 10 ;// m = 3*10 + 2
//     n = parseInt(n / 10); 
// }
// if(m === x) {
//     console.log("palindromes")
// }
// else {
//     console.log("Not a palindrome")
// }


// int a = 13 ;
// a/2 => int/int => 13/2 => 6

let n = 12321 ;
// arr = [1,2,3,2,1]
//           i j

let arr = [] ;

// console.log(arr[0])
// arr[3] = 90 ; // [undefined, undefined, 90]
// console.log(arr[0])
// console.log(arr.length)
n = 121 // 192 => 19 => 1 => 0
let index = 0; // 0 => 1 => 2 => 3
// arr = [2, 9, 1]
//        i     2
while(n != 0){
    arr[index] = n % 10 ;// arr[2] = 1
    index ++ ;
    n = parseInt(n / 10) ;
}
let flag = true ;
let i = 0 , j = arr.length - 1 ;
while( i < j) {
    if(arr[i] !== arr[j]){
        flag = false ;
        break ;
    }
    i++; j--;
}

flag ? console.log("palindrome") : console.log("not a palindrome")