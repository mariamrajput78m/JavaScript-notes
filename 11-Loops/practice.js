// ============================================
// PRACTICE: Loops in JavaScript
// ============================================
 
// ---------- 1. THE CLASSIC FOR LOOP ----------
// (initialization; condition; increment)
for (let i = 0; i < 5; i++) {
  console.log("For loop:", i); // 0, 1, 2, 3, 4
}

// Counting backwards
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i); // 5, 4, 3, 2, 1
}
 
// Skipping by more than 1
for (let i = 0; i <= 10; i += 2) {
  console.log("Even:", i); // 0, 2, 4, 6, 8, 10
}
 
// ---------- 2. WHILE LOOP ----------
// Checks condition BEFORE running the block
let count = 0;
while (count < 5) {
  console.log("While loop:", count);
  count++; // must update, or this loops forever
}


// ---------- 3. DO...WHILE LOOP ----------
// Runs the block ONCE first, THEN checks the condition
let x = 10;
do {
  console.log("Do-while runs at least once:", x);
  x++;
} while (x < 5); // condition is false immediately, but block already ran once


// ---------- 4. LOOPING THROUGH ARRAYS ----------
let fruits = ["apple", "banana", "mango"];
 
// classic for loop with index
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}


// for...of loop - gives you the VALUE directly, no index needed
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}
 

// forEach - array method version
fruits.forEach(function (fruit, index) {
  console.log(`${index}: ${fruit}`);
});
