// let executor = (resolve, reject) => {
//     console.log("0")// 1
//     setTimeout(() => {
//         // resolve();
//         console.log('something') ;
//     }, 0)
//     console.log("1") // 2
// }

// let prom = new Promise(executor);
// console.log(prom) // status ??
// console.log("2") // 1

// let successCallback = () => {
//     console.log("3")
//     console.log(prom)
// }

// prom.then(successCallback)

// console.log("4")

/*
1. Mutate(change) the state of the promise object.
2. push the corresponding callback into microtask queue.
*/
// 0 , 1, pending, 2

// micro [B]
// callback [A]
// attched the successcallbacl (B)
// output : pending, 0, 8483ms, 3, pending, fullfilled,2, 1

// by the time resolve executed changin the state

// let prom = new Promise((resolve, reject) => {
//     queueMicrotask(() => {
//         console.log(prom) // pending
//         resolve()
//         console.log(prom) // fullfilled
//     })
// })
// console.log(prom) // pending
// console.log(0) // 0

// setTimeout(() => {// A
//     console.log(1)
// }, 0)
// console.time("nihal")
// for(let i = 0; i < 10e9; i++){

// }
// console.timeEnd("nihal")

// prom.then(() => { // B
//        console.log(2)
// })
// console.log(3)

// GET https://api.postalpincode.in/pincode/{PINCODE}

// let prom = new Promise((resolve, reject) => {
//   let data = {
//     name: "Pappu sharma",
//     age: 22,
//     gender: "male",
//   };
//   reject(data); // data 
// });

// prom.then((x) => {
//     console.log(x)
//   console.log("Inside successcallback");
// });

// prom.catch((x) => {
//     console.log(x)
//     console.log("Error callback")
// })
let pincode = 425001 ;
// string(url), object{method: "GET"}
let prom = fetch(`https://api.postalpincode.in/pincode/${pincode}`);

prom.then(() => {
    console.log("Loaded data")
})

prom.catch(() => {
    console.log("Some error occured in loading the data")
})

// fetch function is core API in browser which makes the network
