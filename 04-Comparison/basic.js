// ==========================================
// JAVASCRIPT COMPARISON OPERATORS
// ==========================================

// Comparison operators compare two values.
// They always return true or false.

// ==========================================
// Equal To (==)
// ==========================================

// == compares only values.

console.log(10 == 10);      // true
console.log(10 == "10");    // true

// JavaScript converts the string into a number.
// This is called Type Coercion.


// ==========================================
// Strict Equal (===)
// ==========================================

// === compares both value AND data type.

console.log(10 === 10);      // true
console.log(10 === "10");    // false

// Number and String are different data types.


// ==========================================
// Not Equal (!=)
// ==========================================

console.log(10 != 5);      // true
console.log(10 != 10);     // false


// ==========================================
// Strict Not Equal (!==)
// ==========================================

console.log(10 !== "10");   // true
console.log(10 !== 10);     // false


// ==========================================
// Greater Than (>)
//
// ==========================================

console.log(20 > 10);   // true
console.log(5 > 10);    // false


// ==========================================
// Less Than (<)
// ==========================================

console.log(5 < 10);    // true
console.log(20 < 10);   // false


// ==========================================
// Greater Than or Equal (>=)
// ==========================================

console.log(10 >= 10);  // true
console.log(20 >= 10);  // true


// ==========================================
// Less Than or Equal (<=)
// ==========================================

console.log(10 <= 20);  // true
console.log(20 <= 10);  // false


// ==========================================
// Real Example
// ==========================================

let age = 18;

if(age >= 18){

    console.log("Eligible to Vote");

}else{

    console.log("Not Eligible");

}


// ==========================================
// Common Mistake
// ==========================================

// Beginners often use ==

// Prefer === because it checks both
// value and data type.


// ==========================================
// Challenge
// ==========================================

// Check whether a student passed.

// Marks >= 50

// Print
// Pass
// or
// Fail