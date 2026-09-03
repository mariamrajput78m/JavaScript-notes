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
 