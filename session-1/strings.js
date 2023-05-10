// You are given an array named players and an object named person.
// Create two variables, one named team that will store a reference to players and another named team1 that will be a copy of players.
// Create another variable cap1 that will be a copy of person object.

// let arr = [2, 3, 4];
// //  array literal
// let nums = new Array(2, 3, 4) ;

// console.log(arr, nums);
// console.log(arr[0] , nums[0])

// let a = 10; 
// number literal
// let x = new Number(10); 

// int[] arr = {4, 3, 5};

// Objects 
// let arr = [4, 3, 5];
// console.log(typeof arr)

/**
 student 
    name,
    gender,
    branch,
    section...
    rollnumber,
 */

// let user = ["aravind@gmail.com", "abc123@gmail.com"]
//                 0                1
// console.log(user[0])
// index(key), value 
//    0       "aravind@gmail.com"

// let user1 = {
//     email:  "aravind@gmail.com", 
//     password: "abc@123"
// }

// {key: value, key2: value2, key3: value3}

// retrival of data , updation , deletion , verification 

// console.log(typeof user1.password ,typeof user1.email)

// console.log(user1["password"])

//   key,     value 
// email        "aravind@gmail.com"

// hashmap
/*
    User
        email: string
        password: string

*/
// colon
// " double quotes
// ' single quote
// ` backtick
// {key1: value1  , key2: value2}
let student = {
    name: "Aravind",
    age: 22,
    friends: ["vipin", "rajesh"],
    isAlive: true,
    isVegetarian: false,
    blood_group: "O+ve",
    fullName: {
        firstName: "Aravind",
        middleName: "",
        lastName: "Samudrala"
    }
};

// for(let i in student) {
//     // i = "name"
//     console.log(i, typeof i)
// }

// fullName => firstName, middleName, lastName
// retrival of data from object
// updating the data

// using the . notation 
// console.log(student.blood_group)
// console.log(student.friends[1])
// console.log(student.fullName.lastName)

// indexing format 
// console.log(student["age"])

// console.log(student["friends"][1])

// console.log(student.name, student["full_name"])
// student.name = "Aravind Samudrala" ;
// console.log(student.name, student["name"])

// student.fullName.firstName = "aravind" ;
// console.log(student.fullName.firstName)

// student.friends[1] = "RAJESH" ;
// console.log(student.friends[1])

// delete elements in the object
// console.log(student)

// delete student.name

// console.log(student)
// console.log(student.abc)
// console.log(student.name)
// delete student.name ;
// console.log(student.name)

// let arr = [3, 4, 5];
// for(let i = 0 ; i < arr.length; i++){
//     console.log(arr[i])
// }
// let key = "age" ;
// console.log(student[key]) // student["age"]

// plain for 

// for(intialisation; condition ; updation){
//     body
// }

// for in loop

// let arr = [4, 12, 18]
//         0   1   2 
//                x=2
// for(let x in arr){
//     console.log(x, typeof x) // "0", "1" , "2"
// }

// console.log(arr[0], arr["0"])

// let a = 1 ;
// let b = "1" ;
// console.log(a, typeof a)
// console.log(b, typeof b)


// let user = {
//     username: "aravind" , // aravind123
//     password: "abc@123"
// }

// console.log(user.password, user["password"]);

// user.username = "aravind123" ;
// user["username"] = "aravind123";
// console.log(user.username)

// delete user.password ;

// for(let x in user){
//     console.log(x) // 
// }

// console.log(user.password) // undefined

// let arr = [4, 2, 3 , 4, 3, 3, 8] ;
//                            i=6
/*
    4: 2,
    2: 1,
    3: 3,
    8: 1
*/
// frequency[4] = undefined
// let frequency = {} ;
// for(let i = 0 ; i < arr.length ; i ++) {
//     if(frequency[ arr[i] ] === undefined) {
//         // first occurance
//         frequency[ arr[i] ] = 1 ;
//     }
//     else{ 
//         // already the key is present
//         frequency[ arr[i] ] = frequency[ arr[i] ] + 1 ;
//     }
// }
// console.log(frequency)

/*
frequency
{
    4: 2,
    2: 1,
    3: 3,
    8: 1
}

*/
/*
freq = {
    4: 2,
    2: 1,
    3: 3,
    8: 1
}
*/

// let obj = {
//     name: "aravind",
//     "password" : "abc@123",
//     "123abc": "dkjdkkd",
//     "abc-xyz": true,
//     abc_xyz: 89
// }

// console.log(obj["abc-xyz"])
// console.log(obj["123abc"])





// Strings 

let str = "aravind$";
// let str1 = 'aravind' ;
// let str2 = `aravind` ;
// string inside `` we call as template strings 
// console.log(str === str2)

// let name = 'Shweta' ;

// let sayHello = `Hello ${name}` ;
// console.log(sayHello)

// strings are array of chars 
// 'a' => 97
// 'b' => 98
// 'z' => 122
// 'A' => 65
// '$' => 36
// console.log(str.charCodeAt(7))
// for invalid index charAt() => '' (empty string)

// a b c d e f g h i j k l m n o p q... 

// "acd" => 
// "npq"


// "z" => 122 + 13 => 135


// let char = "#" ;
// console.log(char.charCodeAt(0))

// console.log(String.fromCharCode(110))

// 'a' => 'n'
// 97  => 110

console.log("abc" + "kmz") // abckmz

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M', '?': '?', ',': ','
};
function encode(inputString){
    let decoderArr = [];
    for(let i = 0 ; i < inputString.length ; i++) {
        if(lookup[ inputString[i] ] === undefined){
            decoderArr.push( inputString[i] ) ;
        }   
        else{ 
            decoderArr.push(lookup[ inputString[i] ]);
        }
    }
    return decoderArr
}


console.log(lookup["V"]);
console.log(encode("#MNZD"));