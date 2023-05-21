

// const sizeElement = document.createElement("h1");
// sizeElement.innerText = `Width: ${window.innerWidth} and Height ${window.innerHeight}` ;


// document.body.append(sizeElement);

// window.onresize = function(){
//     // console.log(window.innerHeight, window.innerWidth);
//     sizeElement.innerText = `Width: ${window.innerWidth} and Height ${window.innerHeight}` ;
// }

// extract, update, create, delete

// function deleteElement() {
//     const element = document.getElementById("child");
//     element.remove();
// }

// let deletedElements = [] ;
//  let selectElement = document.getElementsByTagName("select")[0];
// function deleteElement() {
   
//     let selectedValue = selectElement.value ;// "blue"
//     let childrenList = selectElement.children; 

//     for(let i = 0 ; i < childrenList.length; i++) {
//         if(selectedValue === childrenList[i].value){
//             deletedElements.push(childrenList[i]);
//             childrenList[i].remove();
//         }
//     }
// }

// function retainAll(){
//     for(let i = 0 ;  i < deletedElements.length; i++){
//         selectElement.append(deletedElements[i]);
//     }
// }
// [
//     {value: "red", innerText: "red"},
//     {value: "blue", innerText: "blue"},
//     {value: "yellow", innerText: "Yellow"}
// ]
let elements = document.getElementsByTagName("strong")
function highlightBold(){
    // write the logic to highlight the elements
    for(let i = 0 ; i < elements.length; i++) {
        elements[i].style.color = "red" ;
    }
}

function retainColors(){
    for(let i = 0 ; i < elements.length; i++) {
        elements[i].style.color = "black" ;
    }
}