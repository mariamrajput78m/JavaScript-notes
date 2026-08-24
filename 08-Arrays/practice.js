// ============================================
// PRACTICE: Arrays in JavaScript
// ============================================
 
// ---------- 1. CREATING ARRAYS ----------
let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null]; // arrays can hold mixed types
 
console.log(fruits);
console.log("Length:", fruits.length);
 
 
// ---------- 2. ACCESSING AND UPDATING ELEMENTS ----------
console.log(fruits[0]);  // "apple" -> arrays are 0-indexed
console.log(fruits[2]);  // "mango"
console.log(fruits[10]); // undefined -> no error, just undefined
 
fruits[1] = "blueberry"; // update by index
console.log(fruits);

// ---------- 3. ADDING / REMOVING FROM THE END ----------
fruits.push("grape");     // adds to the END, returns new length
console.log(fruits);
 
let removed = fruits.pop(); // removes from the END, returns removed item
console.log("Removed:", removed);
console.log(fruits);
 
