// let inputElement = document.getElementById("x");
// console.log(inputElement)


// By using the tagname 
// div, p , img , section , input, form, button, pre, b , span

// let inputElements = document.getElementsByTagName("input")

// console.log( inputElements )

// console.log(inputElements[0].type )

// By using the class name 

// let inputElements = document.getElementsByClassName("input1");

// console.log(inputElements[0].innerText)


// inputElements[0].innerText = "Something else" ;


// let elements = document.getElementsByClassName("input2")
// console.log(elements[2]);

// button, button.input1, button.input2, button:nth-child(1)

// CSS selector => .input1

// let element = document.querySelector(".input1")
// let elements = document.querySelectorAll(".input1")

// let inputElements = document.querySelectorAll("input.input1")
// // input.input1#one => #one
// // input.input1#two => #two

// console.log(inputElements.length) ; // 2

// console.log(inputElements[0]) // first input element  with clasName input1
// console.log( inputElements[1].value.length ) // 

// const element = document.getElementById("test") ;

// // console.log( element["data-abc"] )

// // console.log(element["data-abc"]);

// let attributeValue = element.getAttribute("data-abc") ;

// console.log(attributeValue)

// data-bs-toggle

// function printHello() {
//     console.log("Hello !")
// }


// let arr = [
//     "amruth",
//     "Dikesh",
//     "Love gupta",
//     "Vyshnavi",
//     "Bhibuthi",
//     "Vivek"
// ]

// let userElement = document.getElementById("user");
// let button = document.getElementsByTagName("button")[0] ;

// let index = 0 ; // 0 => 1 => 2 => ... => 

// function changeName() {
//     // first time => index = 0 => 
//     console.log(index); // 0 , 1
//     userElement.innerText = arr[index]
//     if(index < arr.length -1){
//         index++;
//     }
//     else{
//         button.disabled = true ;
//     }
// }


/*

    <div class="user-item">Amruth</div>
    <div class="user-item">Dikesh</div>

*/

// let arr = [
//     "amruth",
//     "Dikesh",
//     "Love gupta",
//     "Vyshnavi",
//     "Bhibuthi",
//     "Vivek"
// ]
// const usersContainer = document.getElementById("user");
// const button = document.getElementsByTagName("button")[0] ;
// let index = 0 ;

// function addName() {
//     let div = document.createElement("div");
//     div.innerText = arr[index] ;
//     div.className = "user-item" ;
//     usersContainer.append(div);
//     if(index < arr.length - 1) {
//         index++;
//     }
//     else{
//         button.disabled = true ;
//     }
// }

// let container = document.getElementById("container"); 

// let newElement = document.createElement("span") ;
// // <span>{}</span>

// newElement.innerText = "Some new element's innerText" ;
// // <span>Some new element's innerText</span>

// setTimeout(() => {
//     container.append(newElement);
// } , 5000) 

// function addName() {
//     let inputElement = document.createElement("input");
//     inputElement.value = "Souvik";
//     document.body.append(inputElement);
// }

/*
    <div class="user">
            <div>Aravind</div>
            <div>22</div>
            <div>Male</div>
        </div>
*/

let users = [
    {
        name: "Aravind",
        age: 32,
        gender: "male"
    },
    {
        name : "Sachin",
        age: 25,
        gender: "male"
    },
    {
        name: "Vyshnavi",
        age: 34,
        gender: "female"
    }
];
/*
    <div class="user">
            <div>Aravind</div>
            <div>22</div>
            <div>Male</div>
        </div>
*/

const usersContainer = document.getElementById("users-container") ;
const button = document.getElementsByTagName("button")[0] ;
let index = 0 ;
function addUser() {
    const user = document.createElement("div");
    user.className  = "user" ;
    const name = document.createElement("div");
    name.innerText = users[index].name ;
    const age = document.createElement("div");
    age.innerText = users[index].age ;
    const gender = document.createElement("div");
    gender.innerText = users[index].gender ;

    user.append(name);
    user.append(age);
    user.append(gender);

    usersContainer.append(user); 

    if(index < users.length - 1) {
        index++;
    }
    else {
        button.disabled = true ;
    }
}