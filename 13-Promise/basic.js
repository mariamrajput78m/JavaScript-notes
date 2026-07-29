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

// catch for failure

// chain .then().catch() together
promiseONe
    .then(function () {
        console.log("Promise is Consumed");
    })
    .catch(function () {
        console.log("Promise is failed");
    });

// resolve with object
const promisethree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 1 is completed");
        resolve({username: "Mariam" , email: "mariam@example.com"});
    }, 1000)
})

promisethree
.then((user) => {
    console.log(user);
    return user.username;
})
.then((name) => {
    console.log(name);
})
.catch((err) => {
    console.log("Error!");
})
.finally(() => {
    console.log("Promise is consumed or failed");
})