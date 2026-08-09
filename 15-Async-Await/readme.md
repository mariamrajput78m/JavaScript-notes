// ==========================================
// JAVASCRIPT ASYNCHRONOUS PROGRAMMING
// ==========================================


// ==========================================
// 1. SYNCHRONOUS JAVASCRIPT
// ==========================================

// By default, JavaScript executes code
// line by line.

// The next line waits for the previous
// line to finish.

console.log("First");
console.log("Second");
console.log("Third");

// Output:
// First
// Second
// Third



// ==========================================
// 2. ASYNCHRONOUS JAVASCRIPT
// ==========================================

// Asynchronous code allows certain tasks
// to happen later without blocking the
// execution of the rest of the code.

console.log("Start");

setTimeout(function () {
    console.log("This runs later");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs later



// ==========================================
// 3. setTimeout()
// ==========================================

// setTimeout() executes a function after
// a specified amount of time.
//
// Time is measured in milliseconds.
//
// 1000 milliseconds = 1 second

setTimeout(function () {
    console.log("Hello after 2 seconds");
}, 2000);



// ==========================================
// 4. CALLBACK + setTimeout()
// ==========================================

// The function passed to setTimeout()
// is a callback.
//
// It is executed later.

function sayHello() {
    console.log("Hello!");
}

setTimeout(sayHello, 2000);

// Notice:
//
// sayHello
//
// NOT:
//
// sayHello()
//
// We pass the function itself because
// setTimeout() will call it later.



// ==========================================
// 5. MULTIPLE ASYNCHRONOUS TASKS
// ==========================================

console.log("Task 1");

setTimeout(() => {
    console.log("Task 2");
}, 2000);

setTimeout(() => {
    console.log("Task 3");
}, 1000);

console.log("Task 4");

// Output:
// Task 1
// Task 4
// Task 3
// Task 2

// Task 3 appears before Task 2 because
// its timer is shorter.



// ==========================================
// 6. WHY DO WE NEED ASYNC JAVASCRIPT?
// ==========================================

// Some operations take time.
//
// Examples:
// - Getting data from a server
// - API requests
// - Reading files
// - Database operations
// - Timers
//
// We don't want JavaScript to stop all
// other work while waiting for these tasks.



// ==========================================
// 7. CALLBACK EXAMPLE
// ==========================================

// A callback is a function passed into
// another function.

function downloadFile(callback) {

    console.log("Downloading file...");

    setTimeout(() => {

        console.log("Download complete!");

        // Execute the callback after
        // the download is complete.

        callback();

    }, 2000);
}


function openFile() {
    console.log("Opening file...");
}


downloadFile(openFile);

// Output:
// Downloading file...
// Download complete!
// Opening file...



// ==========================================
// 8. CALLBACK HELL
// ==========================================

// Callback Hell happens when many
// asynchronous operations depend on each
// other and callbacks become deeply nested.
//
// It is also called the
// "Pyramid of Doom."

setTimeout(() => {

    console.log("Task 1 complete");

    setTimeout(() => {

        console.log("Task 2 complete");

        setTimeout(() => {

            console.log("Task 3 complete");

            setTimeout(() => {

                console.log("Task 4 complete");

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

// The code works, but becomes difficult
// to read and maintain.



// ==========================================
// 9. PROMISES
// ==========================================

// A Promise represents the eventual
// completion or failure of an operation.
//
// A Promise has three states:
//
// 1. Pending
// 2. Fulfilled
// 3. Rejected



// ==========================================
// 10. CREATING A PROMISE
// ==========================================

const myPromise = new Promise((resolve, reject) => {

    // Imagine some task is happening.

    let success = true;

    if (success) {

        // Task completed successfully.

        resolve("Task completed!");

    } else {

        // Something went wrong.

        reject("Task failed!");
    }
});



// ==========================================
// 11. CONSUMING A PROMISE
// ==========================================

// .then() runs when the Promise
// is successfully resolved.

myPromise
    .then((message) => {
        console.log(message);
    });



// ==========================================
// 12. .catch()
// ==========================================

// .catch() handles a rejected Promise.

const anotherPromise = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("Success!");
    } else {
        reject("Something went wrong!");
    }
});


anotherPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });



// ==========================================
// 13. PROMISE WITH setTimeout()
// ==========================================

// Promises are often used with
// asynchronous operations.

function orderFood() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let orderReady = true;

            if (orderReady) {
                resolve("Food is ready!");
            } else {
                reject("Order failed!");
            }

        }, 2000);
    });
}


orderFood()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });



// ==========================================
// 14. async FUNCTION
// ==========================================

// The async keyword is used to create
// an asynchronous function.
//
// An async function always returns
// a Promise.

async function greet() {

    return "Hello from async function!";
}


greet()
    .then((message) => {
        console.log(message);
    });



// ==========================================
// 15. await
// ==========================================

// await is used to wait for a Promise
// to settle.
//
// await is normally used inside
// an async function.

function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("User data received!");

        }, 2000);
    });
}


async function showUser() {

    console.log("Getting user data...");

    // Wait for the Promise to resolve.

    let result = await getUser();

    console.log(result);
}


showUser();



// ==========================================
// 16. async + await
// ==========================================

// async/await makes asynchronous code
// easier to read.
//
// Instead of chaining multiple .then()
// methods, we can write code that looks
// more like normal sequential code.

function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data received!");

        }, 2000);
    });
}


async function fetchData() {

    console.log("Starting...");

    let data = await getData();

    console.log(data);

    console.log("Finished!");
}


fetchData();



// ==========================================
// 17. ERROR HANDLING WITH try/catch
// ==========================================

// try/catch can be used with async/await
// to handle rejected Promises.

function loginUser() {

    return new Promise((resolve, reject) => {

        let loginSuccessful = false;

        setTimeout(() => {

            if (loginSuccessful) {
                resolve("Login successful!");
            } else {
                reject("Invalid username or password!");
            }

        }, 1000);
    });
}


async function login() {

    try {

        let result = await loginUser();

        console.log(result);

    } catch (error) {

        console.log(error);
    }
}


login();



// ==========================================
// 18. REAL-LIFE ASYNC FLOW
// ==========================================

// Imagine an online shopping website.
//
// Step 1 → Place order
// Step 2 → Process payment
// Step 3 → Ship order
//
// Each step takes some time.
//
// async/await makes the sequence easier
// to understand.

function placeOrder() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Order placed");
        }, 1000);

    });
}


function processPayment() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Payment processed");
        }, 1000);

    });
}


function shipOrder() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Order shipped");
        }, 1000);

    });
}


async function completeOrder() {

    try {

        let order = await placeOrder();
        console.log(order);


        let payment = await processPayment();
        console.log(payment);


        let shipping = await shipOrder();
        console.log(shipping);


        console.log("Order completed!");

    } catch (error) {

        console.log("Error:", error);
    }
}


completeOrder();



// ==========================================
// 19. IMPORTANT CONCEPT
// ==========================================

// JavaScript is single-threaded.
//
// It executes one main piece of JavaScript
// at a time.
//
// Asynchronous behavior allows operations
// such as timers and network requests to
// happen without blocking the main
// JavaScript execution.



// ==========================================
// 20. COMPLETE JOURNEY
// ==========================================

// Synchronous JavaScript
//          ↓
// Callbacks
//          ↓
// Callback Hell
//          ↓
// Promises
//          ↓
// async / await
//          ↓
// try / catch



// ==========================================
// QUICK SUMMARY
// ==========================================

// setTimeout()
// → Runs a function later.
//
// Callback
// → A function passed to another function.
//
// Promise
// → Represents the eventual result of
//   an asynchronous operation.
//
// resolve()
// → Successfully completes a Promise.
//
// reject()
// → Rejects a Promise.
//
// .then()
// → Handles a fulfilled Promise.
//
// .catch()
// → Handles a rejected Promise.
//
// async
// → Makes a function return a Promise.
//
// await
// → Waits for a Promise inside an
//   async function.
//
// try/catch
// → Handles errors when using
//   async/await.