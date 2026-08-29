// ============================================
// PRACTICE: Objects in JavaScript
// ============================================
 
// ---------- 1. CREATING OBJECTS ----------
let person = {
  name: "Mariam",
  age: 21,
  isStudent: true,
};
 
console.log(person);


// ---------- 2. ACCESSING PROPERTIES ----------
console.log(person.name);       // dot notation - "Mariam"
console.log(person["age"]);     // bracket notation - 21
 
// Bracket notation is required when the key is dynamic or has spaces
let key = "isStudent";
console.log(person[key]);       // true
 
let missing = person.address;
console.log(missing);           // undefined -> no error for missing keys