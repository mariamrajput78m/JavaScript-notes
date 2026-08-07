// ==========================================
// JAVASCRIPT STRINGS
// ==========================================

// A String stores text.

let firstName = "Mariam";

console.log(firstName);



// ==========================================
// Length
// ==========================================

// length returns total characters.

console.log(firstName.length);



// ==========================================
// Upper Case
// ==========================================

console.log(firstName.toUpperCase());



// ==========================================
// Lower Case
// ==========================================

console.log(firstName.toLowerCase());



// ==========================================
// Trim
// ==========================================

// Removes extra spaces.

let userName = "   Mariam   ";

console.log(userName);

console.log(userName.trim());



// ==========================================
// Includes
// ==========================================

// Checks whether a word exists.

let sentence = "JavaScript is Awesome";

console.log(sentence.includes("JavaScript")); // true

console.log(sentence.includes("Python")); // false



// ==========================================
// Replace
// ==========================================

let language = "Java";

console.log(language.replace("Java","JavaScript"));



// ==========================================
// Slice
// ==========================================

// Extract part of a string.

let city = "Lahore";

console.log(city.slice(0,3));

// Lah



// ==========================================
// Split
// ==========================================

// Converts string into array.

let skills = "HTML,CSS,JavaScript";

console.log(skills.split(","));



// ==========================================
// Template Literals
// ==========================================

// Modern way to create strings.

let name = "Mariam";

let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);



// ==========================================
// Concatenation
// ==========================================

// Joining strings.

let first = "Hello";

let last = "World";

console.log(first + " " + last);



// ==========================================
// Challenge
// ==========================================

// Create a string

// "I love JavaScript"

// Convert it to uppercase.

// Print its length.