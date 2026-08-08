// ==========================================
// JAVASCRIPT CALLBACKS
// ==========================================


// ==========================================
// What is a Callback?
// ==========================================

// A callback is a function that is passed
// as an argument to another function.
//
// The receiving function can then execute
// that function when it needs to.



// ==========================================
// Simple Example
// ==========================================

function greet(name) {

    console.log("Hello " + name);

}

function processUser(callback) {

    // We are calling the function
    // that was passed as an argument.

    callback("Mariam");

}

processUser(greet);


// Output:
// Hello Mariam



// ==========================================
// Understanding the Flow
// ==========================================

// processUser(greet);
//
// 1. greet is passed to processUser
//
// 2. processUser receives it as "callback"
//
// 3. callback("Mariam") calls greet()
//
// 4. greet prints the message



// ==========================================
// Another Example
// ==========================================

function add(a, b, callback) {

    let result = a + b;

    // Send the result to the callback

    callback(result);

}

function displayResult(result) {

    console.log("Result:", result);

}

add(10, 20, displayResult);


// Output:
// Result: 30



// ==========================================
// Callback with Anonymous Function
// ==========================================

// We don't always have to create
// a separate function.

add(5, 10, function(result) {

    console.log("Answer:", result);

});



// ==========================================
// Callback with Arrow Function
// ==========================================

add(2, 3, (result) => {

    console.log("Answer:", result);

});



// ==========================================
// Why are Callbacks Useful?
// ==========================================

// JavaScript often performs tasks that
// don't finish immediately.
//
// Examples:
//
// - Reading data
// - Getting data from an API
// - Timers
// - Loading files
//
// A callback can tell JavaScript:
//
// "When this task is finished,
// run this function."



// ==========================================
// setTimeout() Example
// ==========================================

setTimeout(function() {

    console.log("This message appears later.");

}, 2000);


// 2000 milliseconds = 2 seconds



// ==========================================
// Callback with setTimeout()
// ==========================================

function sayHello() {

    console.log("Hello after 2 seconds!");

}

setTimeout(sayHello, 2000);



// ==========================================
// IMPORTANT
// ==========================================

// Notice:
//
// sayHello
//
// NOT:
//
// sayHello()
//
// We pass the function itself.
//
// JavaScript will call it later.



// ==========================================
// CALLBACK HELL
// ==========================================

// Callback Hell happens when
// callbacks are nested inside
// other callbacks again and again.
//
// This can make code difficult
// to read and maintain.



// Example:

setTimeout(() => {

    console.log("Task 1 completed");

    setTimeout(() => {

        console.log("Task 2 completed");

        setTimeout(() => {

            console.log("Task 3 completed");

            setTimeout(() => {

                console.log("Task 4 completed");

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);


// The structure starts looking like:
//
//      callback
//         ↓
//      callback
//         ↓
//      callback
//         ↓
//      callback
//
// This shape is sometimes called
// "Pyramid of Doom."



// ==========================================
// Why is Callback Hell a Problem?
// ==========================================

// 1. Code becomes difficult to read.
//
// 2. Code becomes difficult to maintain.
//
// 3. Error handling becomes harder.
//
// 4. Adding more steps makes nesting worse.
//
// 5. The actual logic becomes difficult
//    to understand.



// ==========================================
// Real-Life Example
// ==========================================

// Imagine an online shopping process:
//
// 1. Place order
// 2. Process payment
// 3. Confirm payment
// 4. Prepare package
// 5. Ship package
//
// If every step depends on the previous step,
// callbacks can become deeply nested.



function placeOrder(callback) {

    setTimeout(() => {

        console.log("Order placed");

        callback();

    }, 1000);

}


function processPayment(callback) {

    setTimeout(() => {

        console.log("Payment processed");

        callback();

    }, 1000);

}


function preparePackage(callback) {

    setTimeout(() => {

        console.log("Package prepared");

        callback();

    }, 1000);

}


function shipOrder() {

    setTimeout(() => {

        console.log("Order shipped");

    }, 1000);

}



// Nested callbacks

placeOrder(() => {

    processPayment(() => {

        preparePackage(() => {

            shipOrder();

        });

    });

});


// This works.
//
// But as the number of asynchronous
// operations increases, the nesting
// becomes difficult to manage.



// ==========================================
// IMPORTANT CONCEPT
// ==========================================

// Callback:
//
// A function passed into another
// function to be executed later
// or when a particular task is complete.
//
//
// Callback Hell:
//
// Too many nested callbacks,
// making asynchronous code difficult
// to read and maintain.



// ==========================================
// WHAT COMES NEXT?
// ==========================================

// Callback Hell is one reason
// JavaScript introduced better ways
// to handle asynchronous operations.
//
// Next:
//
// Callbacks
//     ↓
// Promises
//     ↓
// async / await