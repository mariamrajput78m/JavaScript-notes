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
//--------------------------------------------------------

const promisetwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", CodeEidtor: "GitHub" });
        }
        else {
            reject("ERROR! JS smthg went wrong");
        }

    }, 1000)
})

//--------------------------------------------------------

// resolve with object
const promisethree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 1 is completed");
        resolve({ username: "Mariam", email: "mariam@example.com" });
    }, 1000)
})

//chaning
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


//--------------------------------------------------------
const promisefour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Marry", password: 123 });
        }
        else {
            reject("ERROR!");
        }
    }, 1000)
})

//consume Promise
promisefour
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

