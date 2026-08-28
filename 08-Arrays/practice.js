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
 

// ---------- 4. ADDING / REMOVING FROM THE START ----------
fruits.unshift("kiwi");   // adds to the START, returns new length
console.log(fruits);
 
let removedFirst = fruits.shift(); // removes from the START, returns removed item
console.log("Removed first:", removedFirst);
console.log(fruits);
 

// ---------- 5. SPLICE (remove/insert anywhere) ----------
let letters = ["a", "b", "c", "d", "e"];
 
// splice(startIndex, deleteCount, itemsToInsert...)
letters.splice(1, 2); // remove 2 items starting at index 1
console.log("After removing:", letters); // ["a", "d", "e"]
 
letters.splice(1, 0, "x", "y"); // insert without removing
console.log("After inserting:", letters); // ["a", "x", "y", "d", "e"]


// ---------- 6. SLICE (copy a portion, does NOT modify original) ----------
let original = [1, 2, 3, 4, 5];
let sliced = original.slice(1, 3); // from index 1 up to (not including) 3
console.log("Sliced:", sliced);       // [2, 3]
console.log("Original unchanged:", original); // [1, 2, 3, 4, 5]


// ---------- 7. LOOPING THROUGH ARRAYS ----------
let scores = [80, 90, 70];
 
// classic for loop
for (let i = 0; i < scores.length; i++) {
  console.log("Score:", scores[i]);
}
 
// for...of loop (cleaner, no index needed)
for (let score of scores) {
  console.log("Score (for-of):", score);
}
 
// forEach method
scores.forEach(function (score, index) {
  console.log(`Index ${index}: ${score}`);
});


// ---------- 8. MAP (transform each item, returns NEW array) ----------
let doubled = scores.map(function (score) {
  return score * 2;
});
console.log("Doubled:", doubled);       // [160, 180, 140]
console.log("Original unchanged:", scores); // [80, 90, 70]


// ---------- 9. FILTER (keep items that pass a test) ----------
let passingScores = scores.filter(function (score) {
  return score >= 75;
});
console.log("Passing scores:", passingScores); // [80, 90]


// ---------- 10. REDUCE (combine all items into one value) ----------
let total = scores.reduce(function (sum, score) {
  return sum + score;
}, 0); // 0 is the starting value
console.log("Total:", total); // 240
 
let average = total / scores.length;
console.log("Average:", average);


// ---------- 11. FIND / FINDINDEX ----------
let found = scores.find(function (score) {
  return score < 80;
});
console.log("First score under 80:", found); // 70
 
let foundIndex = scores.findIndex(function (score) {
  return score < 80;
});
console.log("Index of first score under 80:", foundIndex); // 2


// ---------- 12. INCLUDES / INDEXOF ----------
console.log(scores.includes(90));  // true
console.log(scores.indexOf(70));   // 2
console.log(scores.indexOf(999));  // -1 -> not found


// ---------- 13. SORTING ----------
let unsorted = [40, 5, 100, 25, 1];
 
// WARNING: default sort() converts to strings! This breaks number sorting.
console.log([...unsorted].sort()); // wrong order for numbers, e.g. [1, 100, 25, 40, 5]
 
// Correct way to sort numbers: provide a compare function
console.log([...unsorted].sort((a, b) => a - b)); // ascending
console.log([...unsorted].sort((a, b) => b - a)); // descending
 

// ---------- 14. REVERSING ----------
let toReverse = [1, 2, 3];
console.log(toReverse.reverse()); // [3, 2, 1] -> mutates the original!