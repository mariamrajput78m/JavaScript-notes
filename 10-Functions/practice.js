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
 