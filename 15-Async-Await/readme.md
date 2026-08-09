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


