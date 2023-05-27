// async and await 

async function callme() {
    console.log("a");
    console.log("b")
    let prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data1");
        }, 1000)
    })
    console.log("c")
    let result = await prom1 ;
    console.log(result) // Data1
    let prom2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("data2")
        }, 2000)
    })
    let result1 = await prom2 ;
    console.log(result1) // data2
    return 10; // 3.0001s
}

let x = callme(); // x (pending)

console.log(x) // Promise <penidng>

x.then((data) => {
    console.log("X is resolved with", data)
})

// 0, 1, 2, 0.5, 1.5
/**
 * Whenever await keyword encountered inside the async function it will take a pause at that line and gets erased itself from the callstack
 */