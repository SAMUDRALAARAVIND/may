
// const item = document.getElementById("test");

// function func() {
//     console.log("clicked")
// }

// item.addEventListener("click", func) ;

// event string
// listener => callback function 

// const button = document.getElementsByTagName("button")[0];

// function x() {
//     alert("Some alert message");
// }

// button.addEventListener("click", x)


// const div = document.getElementsByTagName("div")[0] ;
// div.addEventListener("dblclick", () => {
//     alert("Dblclicked")
// })

// 3 elements => 
/*
div: blue => #100
div: redborder => #200
button => #300


The element with one reference can not be put at two places in the UI

*/

// const divs = document.getElementsByTagName("div");
// const div1 = divs[0] ; // 
// const div2 = divs[1] ;

// const button = document.getElementsByTagName("button")[0] ;


// button.addEventListener("click" , () => {
//     const temp = document.createElement("b");// #400
//     temp.innerText = "Element Bold"

//     const temp2 = temp.cloneNode(true);

//     div1.append(temp2);
//     div2.append(temp);
// })

// let a = {x: 1, y : 2} // #300
// let b = {x: 1, y: 2} ;// #200


// const testElement = document.getElementById("test");


// console.log( testElement.cloneNode(false) )

// console.log( testElement.cloneNode(true) )

// const input = document.getElementsByTagName("input")[0] ;


// input.addEventListener("focus", () => {
//     console.log("You focused the input")
// })

// input.addEventListener("blur", () => {
//     if(input.value.length < 3){
//         alert("Input should have atleast 3 charecters");
//     }
// })

// input.addEventListener("change", () => {
//     console.log("Value changed")
// })
/*
    focus
    blur(unfocus)
    change
*/

const form = document.getElementsByTagName("form")[0];


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userInfo = {
        username: event.target["username"].value,
        password: event.target["password"].value,
        email: event.target["email"].value
    }

    console.log(userInfo)
})

function listener(event, callback) {
    console.log(event)
    callback(10, 20)
}

listener("ssjk", (a, b ) => {
    console.log(a + b)
    console.log("callbak called")
})