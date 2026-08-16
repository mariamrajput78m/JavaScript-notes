// ============================================
// PRACTICE: Numbers and Math in JavaScript
// ============================================
 
// ---------- 1. BASIC ARITHMETIC ----------
let a = 10;
let b = 3;
 
console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Remainder (modulo):", a % b); // 1 -> leftover after division
console.log("Exponent:", a ** b);      // 1000 -> 10^3
 
 
// ---------- 2. INCREMENT / DECREMENT ----------
let count = 5;
count++; // same as count = count + 1
console.log("After increment:", count); // 6
 
count--; // same as count = count - 1
console.log("After decrement:", count); // 5

// ---------- 3. NUMBER TYPES: INTEGER vs FLOAT ----------
let intNum = 42;
let floatNum = 42.5;
 
// JS does NOT separate int and float types like C++.
// Everything is just "number".
console.log(typeof intNum);   // "number"
console.log(typeof floatNum); // "number"
 
 
// ---------- 4. FLOATING POINT PRECISION ISSUE ----------
// This is a classic JS trap - watch out for it
console.log(0.1 + 0.2); // 0.30000000000000004 (NOT exactly 0.3)
 
// Fix: round to a fixed number of decimals
console.log((0.1 + 0.2).toFixed(2)); // "0.30" (returns a string!)

// ---------- 5. PARSING STRINGS INTO NUMBERS ----------
let str1 = "25";
let str2 = "25.75";
let str3 = "25px"; // common when reading CSS values
 
console.log(parseInt(str1));    // 25
console.log(parseFloat(str2));  // 25.75
console.log(parseInt(str3));    // 25 -> stops at first non-numeric char
 
// Number() is stricter - fails if the whole string isn't a valid number
console.log(Number(str1));  // 25
console.log(Number(str3));  // NaN -> because "25px" is not a clean number
 