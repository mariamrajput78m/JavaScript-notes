// ============================================
// PRACTICE: Functions in JavaScript
// ============================================
 
// ---------- 1. FUNCTION DECLARATION ----------
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Mariam"));
 
// Function declarations are HOISTED - you can call them before they appear in the file
console.log(sayHi()); // works even though sayHi() is defined below
function sayHi() {
  return "Hi!";
}
 

// ---------- 2. FUNCTION EXPRESSION ----------
// Function stored in a variable - NOT hoisted the same way
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 4)); // 7
 
// console.log(subtract(5, 2)); // would fail - can't call before this line runs
const subtract = function (a, b) {
  return a - b;
};
 

// ---------- 3. ARROW FUNCTIONS ----------
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4)); // 12
 
// Shorthand: single expression, no curly braces needed = automatic return
const square = (n) => n * n;
console.log(square(5)); // 25
 
// Single parameter - parentheses are optional
const double = n => n * 2;
console.log(double(6)); // 12
 
// No parameters - parentheses are required
const sayHello = () => "Hello!";
console.log(sayHello());


// ---------- 4. DEFAULT PARAMETERS ----------
function greetUser(name = "Guest") {
  return "Welcome, " + name;
}
console.log(greetUser());        // "Welcome, Guest" -> no argument passed
console.log(greetUser("Ali"));   // "Welcome, Ali"


// ---------- 5. RETURN VALUES ----------
function isEven(num) {
  return num % 2 === 0; // function stops here once it hits return
  console.log("This never runs"); // unreachable code
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// A function with no return statement gives back undefined
function noReturn() {
  let x = 5;
}
console.log(noReturn()); // undefined


// ---------- 6. REST PARAMETERS (accept unlimited arguments) ----------
function sumAll(...numbers) {
  // "numbers" becomes a real array inside the function
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15


// ---------- 7. PASSING FUNCTIONS AS ARGUMENTS (CALLBACKS) ----------
function processArray(arr, callback) {
  let result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}
 
let numbers = [1, 2, 3];
let squared = processArray(numbers, function (n) {
  return n * n;
});
console.log(squared); // [1, 4, 9]
 
// Same thing using an arrow function - very common pattern
let doubled = processArray(numbers, (n) => n * 2);
console.log(doubled); // [2, 4, 6]


// ---------- 8. FUNCTIONS RETURNING FUNCTIONS ----------
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}
 
let triple = multiplyBy(3); // triple is now a function
console.log(triple(5)); // 15
console.log(multiplyBy(10)(4)); // 40 - calling it immediately


// ---------- 9. SCOPE - WHERE VARIABLES ARE VISIBLE ----------
let globalVar = "I'm global";
 
function checkScope() {
  let localVar = "I'm local";
  console.log(globalVar); // works - can access global from inside
  console.log(localVar);  // works - defined right here
}
checkScope();
// console.log(localVar); // would fail - localVar doesn't exist outside the function


// ---------- 10. "this" INSIDE REGULAR FUNCTIONS VS ARROW FUNCTIONS ----------
let obj = {
  name: "Mariam",
  regularFunction: function () {
    console.log(this.name); // "this" = obj, works correctly -> "Mariam"
  },
  arrowFunction: () => {
    console.log(this.name); // "this" is NOT obj here - arrow functions don't bind their own "this"
  },
};
obj.regularFunction(); // "Mariam"
obj.arrowFunction();   // undefined


// ---------- 11. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ----------
// Runs once, immediately, and doesn't pollute the outer scope
(function () {
  console.log("This runs immediately");
})();


