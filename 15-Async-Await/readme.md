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
//
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
//
// Start
// End
// This runs later
//
// "This runs later" appears after 2 seconds.



// ==========================================
// 3. setTimeout()
// ==========================================

// setTimeout() is used to execute a function
// after a specified amount of time.
//
// Time is written in milliseconds.
//
// 1000 milliseconds = 1 second

setTimeout(function () {

    console.log("Hello after 2 seconds");

}, 2000);

// ==========================================
// 5. CALLBACK + setTimeout()
// ==========================================

// The function passed to setTimeout()
// is a callback.
//
// It is given to setTimeout() and executed
// later.

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
// 6. MULTIPLE ASYNCHRONOUS TASKS
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
//
// Task 1
// Task 4
// Task 3
// Task 2
//
// Even though Task 2 was written before
// Task 3, Task 3 finishes first because
// it has a shorter timer.



// ==========================================
// 7. WHY DO WE NEED ASYNC JAVASCRIPT?
// ==========================================

// Some operations take time.
//
// Examples:
//
// - Getting data from a server
// - API requests
// - Reading files
// - Database operations
// - Timers
//
// We don't want JavaScript to freeze
// while waiting for these operations.



// ==========================================
// 8. CALLBACK EXAMPLE
// ==========================================

// A callback is a function passed into
// another function.

function downloadFile(callback) {

    console.log("Downloading file...");

    setTimeout(() => {

        console.log("Download complete!");

        // Execute callback after
        // downloading is complete.

        callback();

    }, 2000);

}

function openFile() {

    console.log("Opening file...");

}

downloadFile(openFile);

// Output:
//
// Downloading file...
// Download complete!
// Opening file...



// ==========================================
// 9. CALLBACK HELL
// ==========================================

// When many asynchronous operations depend
// on each other, callbacks can become
// deeply nested.
//
// This is called Callback Hell.
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

// The code becomes difficult to read
// and maintain.



// ==========================================
// 10. PROMISES
// ==========================================

// A Promise represents the eventual
// completion or failure of an operation.
//
// A Promise can have three states:
//
// 1. Pending
// 2. Fulfilled
// 3. Rejected


// ==========================================
// Creating a Promise
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
// Consuming a Promise
// ==========================================

// .then() runs when the Promise
// is successfully resolved.

myPromise.then((message) => {

    console.log(message);

});



// ==========================================
// .catch()
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
// 11. PROMISE WITH setTimeout()
// ==========================================

// This is a more realistic example.

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
