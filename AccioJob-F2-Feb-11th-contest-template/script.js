/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(element){
    if(element.marks > 50){
      console.log(element)
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element){
    if(element.marks > 50){
      console.log(element)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newStudentObject = {id: 90, name:"Aravind", age: 22, marks: 100} ;
  arr.push(newStudentObject);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  // let n = arr.length ;// n = 3
  // for(let i = 0 ; i < arr.length ; i++) {
  //   if(arr[i].marks < 50){
  //     // delete the current element 
  //     arr.splice(i , 1);
  //   }
  // }
  // console.log(arr) // 

  let arr = arr.filter(function(element, index, list){
     return element.marks >= 50 ;
  });
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let students = [
    {
      id: 93,
      name: 'Tanzil',
      age: 20,
      marks: 60
    },
    {
      id: 29,
      name: "Aravind",
      age: 22 ,
      marks: 20 
    },
    {
      id: 27,
      name: "Bhibuti",
      age: 21,
      marks: 80
    }
  ]
  console.log(students)
}


// let obj = 272;

// // console.log(obj && obj.x) // undefined , undefined.x

// if(obj !== undefined){
//   console.log(obj.x)
// }