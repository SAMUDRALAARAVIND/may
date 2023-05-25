// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name: "Aravind", age: 22})
//     }, 4000)
// })
// success of prom , success of x, error of y

// "error of prom", success of y, error of x

// success of prom, success of y, success of x, Y(F, {aravind})
// let successCallback = (data) => {
//     console.log("success of prom")
// }
// let errorCallback = () => {
//     console.log("error of prom")
//     return {name: "Shashank", age: 21}
// }
// x created first [x, y] => [x(F), y(F, {aravind})]

// as soon as prom state is changed all it's dependencies need to be executed
// x is the first dependecy is x => x(F) => SC of x will be executed.

// the second promise depending on prom will be processed => SC of y will be executed.

// let x = prom.then(successCallback)
// let y = prom.catch(errorCallback);

// setTimeout(() => {
//     console.log(y, x) // fullfilled, {shashank},
// }, 5000)

// x.then(() => {
//     console.log("success of x")
// })
// x.catch(() => {
//     console.log("error of x")
// })

// y.then(() => {
//     console.log("success of y")
// })
// y.catch(() => {
//     c
// })
/*
 x pending => fullfilled 
 the success callback that we attached to promise x needs to be executed

 x pending => rejected
 the failure callback that we attached to promise x will be executed.

 x is a dependent promise(on prom obejct).

// states P (Pending), F (Fullfilled), R (rejected), SC (successCallback), EC (Error callback)

prom(P) => prom(F), y(F) => SC of prom willbe executed => x(F) => SC of x will be executed.
                         => The data of the EC of y will be the returned value of the errorCallback of prom
                   
*/

// promise x is depends on the status of the promise object
// console.log(x) // pending?
// setTimeout(() => {
//     console.log(x)
// }, 5000)
// console.log(x instanceof Promise)

// promise object
// then ?? function/method

// a promise in js is an object which represents eventual completion or failure of a task.

// intially promise object => pending, undefined
// when the promise is fullfilled => fullfilled, data
// when the promise is rejected => rejected, data

// let prom = new Promise((resolve, reject) => {
//     resolve("aravind");
// })

// console.log(prom) // fullfilled, "aravind"

// // Inside first then, Inside second then, Inside third then
// let first = () => {
//     console.log("Inside first then")
// }
// let second = () => {
//     console.log("Inside second then")
// }
// let third = () => {
//     console.log("Inside third then")
// }

// prom.then(first).then(second).then(third);

// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("aravind")
//     }, 2000)
// })
// // prom => after 2s => REJECTED
// // let x = prom.then(() => {});
// // // x status will be => rejected
// // x.catch(() => {
// //     console.log("Inside catch of x", prom)
// //     // prom => REJECTED, "aravind"
// // })

// prom.then(() => {
//     console.log("Inside then")
// }).catch(() => {
//     console.log("Inside catch of x", prom)
//     // prom => REJECTED, "aravind"
// })

// fetch(url, object)

// google.com/get/user-details

// yahoo.com/get/user-details

// function fetch(url) {

//     // code

//     return new Promise(() =>{
//         // code

//         resolve(serverResponse);

//         // code

//         reject(errorObject);
//     });
// }

let pincode = 506163;
let response = fetch(`https://api.postalpincode.in/pincode/${pincode}`);
response.then((info) => {
  // inside the Response clas we have json method
  let prom = info.json();

  prom.then((data) => {
    console.log(data);
    appendOntoWebPage(data[0].PostOffice);
  });

  prom.catch((error) => {
    console.log(error);
  });
});

response.catch((info) => {
  console.log(info);
  console.log("Somethinf went wrong");
});
const placesContainer = document.getElementById("places");

function appendOntoWebPage(arr) {
  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    div.innerText = arr[i].Name;
    placesContainer.append(div);
  }
}

// let data = [
//   {
//     Message: "Number of pincode(s) found:10",
//     Status: "Success",
//     PostOffice: [
//       {
//         Name: "Agriculture College",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Csa",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "Arya Nagar (Kanpur Nagar)",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Arya Nagar",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "Employeement Exchange",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "G T Road",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "Gsvm Medical College",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Medical College",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "Hbti",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Kesa Colony",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "Motijheel (Kanpur Nagar)",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Motijheel",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "N C Line",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Arya Nagar",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "Nawabganj",
//         Description: null,
//         BranchType: "Head Post Office",
//         DeliveryStatus: "Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Nawabganj",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "Purana Kanpur",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Purana Kanpur",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//       {
//         Name: "Swarup Nagar",
//         Description: null,
//         BranchType: "Sub Post Office",
//         DeliveryStatus: "Non-Delivery",
//         Circle: "Uttar Pradesh",
//         District: "Kanpur Nagar",
//         Division: "Kanpur City",
//         Region: "Kanpur",
//         Block: "Swarup Nagar",
//         State: "Uttar Pradesh",
//         Country: "India",
//         Pincode: "208002",
//       },
//     ],
//   },
// ];

// data[0].PostOffice