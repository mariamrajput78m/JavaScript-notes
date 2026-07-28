// Promise Basic Structure

// const promise = new Promise(function () {

// })

// const promiseTwo = new Promise(() => {

// })

// this function contains two parameters 
const promiseONe = new Promise(function (resolve, reject) {
    // Do any Async task here
    // networking , cryptography 

    setTimeout(() => {
        console.log("Async Task 1 is completed");
        reject();
    }, 1000)
})

// then for Success
promiseONe.then(function () {
    console.log("Promise is Consumed");
})

// catch for failure
promiseONe.catch(function () {
    console.log("Promise is failed");
})