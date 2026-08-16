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
 
// ---------- 6. NaN (Not a Number) ----------
let badMath = "abc" * 2;
console.log(badMath);          // NaN
console.log(typeof badMath);   // "number" (yes, NaN's type is "number" - weird but true)
console.log(isNaN(badMath));   // true -> use this to check for NaN
 
 
// ---------- 7. INFINITY ----------
console.log(1 / 0);   // Infinity
console.log(-1 / 0);  // -Infinity
console.log(Infinity > 1000000); // true
 
 
// ---------- 8. THE Math OBJECT ----------
console.log(Math.round(4.5));   // 5  -> rounds to nearest integer
console.log(Math.floor(4.9));   // 4  -> always rounds down
console.log(Math.ceil(4.1));    // 5  -> always rounds up
console.log(Math.abs(-15));     // 15 -> absolute value
console.log(Math.max(3, 7, 2)); // 7  -> largest value
console.log(Math.min(3, 7, 2)); // 2  -> smallest value
console.log(Math.pow(2, 5));    // 32 -> same as 2 ** 5
console.log(Math.sqrt(81));     // 9  -> square root
console.log(Math.PI);           // 3.141592653589793


// ---------- 9. RANDOM NUMBERS ----------
// Math.random() gives a decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());
 
// Generate a random integer between min and max (both inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random dice roll (1-6):", randomInt(1, 6));

// ---------- 10. NUMBER FORMATTING ----------
let price = 1234.5678;
 
console.log(price.toFixed(2));        // "1234.57" -> rounds to 2 decimals, returns STRING
console.log(price.toPrecision(4));    // "1235"    -> 4 significant digits total
console.log(price.toLocaleString());  // "1,234.568" -> adds commas, locale formatting
 
// ---------- 11. CHECKING IF SOMETHING IS A VALID NUMBER ----------
function isValidNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
console.log(isValidNumber(10));      // true
console.log(isValidNumber(NaN));     // false
console.log(isValidNumber("10"));    // false -> string, not number type
 
 
// ---------- 12. MINI PRACTICE PROBLEM ----------
// Calculate the average of an array of numbers
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
 
let scores = [80, 90, 70, 100, 60];
console.log("Average score:", average(scores)); // 80