// ============================================
// PRACTICE: Promises in JavaScript
// ============================================
// A Promise represents a value that isn't ready yet, but will be
// (or will fail) at some point in the future - usually from something
// slow like a network request, a timer, or reading a file.

// ---------- 1. CREATING A PROMISE ----------
// A Promise takes a function with two parameters: resolve and reject
let myPromise = new Promise(function (resolve, reject) {
  let success = true;
 
  if (success) {
    resolve("It worked!");   // call this when the task succeeds
  } else {
    reject("It failed!");    // call this when the task fails
  }
});
 
console.log(myPromise); // Promise { 'It worked!' } -> already settled


// ---------- 2. THE THREE STATES OF A PROMISE ----------
// pending   -> still working, no result yet
// fulfilled -> resolve() was called, has a result
// rejected  -> reject() was called, has an error

let pendingPromise = new Promise(function (resolve) {
  setTimeout(() => resolve("Done after delay"), 1000);
});
console.log(pendingPromise); // Promise { <pending> } -> hasn't resolved yet at this point
 

// ---------- 3. USING .then() AND .catch() ----------
myPromise
  .then(function (result) {
    console.log("Success:", result); // runs if resolve() was called
  })
  .catch(function (error) {
    console.log("Error:", error); // runs if reject() was called
  });