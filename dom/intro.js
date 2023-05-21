//DOM => representation of HTML code in the javascript as an object is called DOM.

// Document representation of HTML snippet:
//  {
//     element_type: "div",
//     class: "parent",
//     innerText: "Parent",
//     children: [
//         {
//             element_type: "div",
//             class: "child",
//             innerText: "CHild",
//             children: [
//                 {
//                     class: "grand-child",
//                     element_type: "p" ,
//                     innerText: "grand child"
//                 }
//             ]
//         },
//         {
//             element_type: "button",
//             class: "btn",
//             id: "clickable-button",
//             innerText: "Click Me"
//             style: {
//                 color: "blue",
//                 font_size: "24px"
//             },
//             children: []
//         }
//     ]
// }


/*
DOM

1. How to access the element(HTML element) into js code .
2. How to read the data of a particular HTML element.
3. How to create and add a new HTML element on to the web page.
4. How remove/delete an HTML element from the document.

*/

// 1. access an element into js code :

// let obj = {
//     a: 10,
//     b: 20,
//     getElementById: function(id){
//         console.log("you sent id: " , id)
//         return id+" spmething"
//     }
// }
// console.log(obj.getElementById("test-id"))

// console.log(window)

// to extract any element document object provides us 4 functions/methods

// i . extract the element by using it's id
// 2 . extract the element by using the classname
// 3 . extract the element by using the tagName
// 4 . extract the element by using the CSS selector.

let buttonReference = document.getElementById("btn")
// buttonReference = #400
// console.log(buttonReference.innerText)
// setTimeout(() => {
//     buttonReference.innerText = "Vyshnavi";
// }, 5000)
// "success" => 7
// console.log(buttonReference.className.length)
// setTimeout(() => {
//     buttonReference.className = "failure"
// }, 5000)

// reference.property_name

console.log(buttonReference.style.backgroundColor)
buttonReference.style.color = "white";
buttonReference.style.border = "none"; 
buttonReference.style.borderRadius = "10px"; 
// let car = "car.jpeg" ;
// let bike = "bike.webp" ;

// let image = document.getElementById("image");
// let source = image.src ;
// let list = source.split("/");

// let currentSource = list[list.length - 1] 

// setTimeout(() => {
//     if(currentSource === car){
//         image.src = "./"+bike; // `./${bike}`
//     }
//     else{
//         console.log("Inside else block")
//         image.src = "./" + car ;
//     }
// }, 5000)


let image = document.getElementById("image");
image.style.border = "2px solid red" ;
function changeColor(){
    // code 
}
setTimeout(changeColor())
setTimeout(changeColor)

let str = "aravind";
console.log(str.length)
console.log(image.src)
console.log(image.src.length)