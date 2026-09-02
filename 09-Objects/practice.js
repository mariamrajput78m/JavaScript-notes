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


// ---------- 3. ADDING / UPDATING PROPERTIES ----------
person.city = "Lahore";       // add new property
person.age = 22;              // update existing property
console.log(person);
 
 
// ---------- 4. DELETING PROPERTIES ----------
delete person.isStudent;
console.log(person);


// ---------- 5. CHECKING IF A PROPERTY EXISTS ----------
console.log("name" in person);       // true
console.log("isStudent" in person);  // false -> we deleted it above
console.log(person.hasOwnProperty("city")); // true


// ---------- 6. NESTED OBJECTS ----------
let student = {
  name: "Mariam",
  university: {
    name: "University of Lahore",
    program: "Computer Science",
  },
};

console.log(student.university.name); // "University of Lahore"
console.log(student.university.program);
 
 
// ---------- 7. OBJECTS CONTAINING ARRAYS ----------
let course = {
  title: "Database Systems",
  topics: ["SQL", "Normalization", "Transactions"],
};


console.log(course.topics[0]);   // "SQL"
course.topics.push("Indexing");  // arrays inside objects still work normally
console.log(course.topics);


// ---------- 8. LOOPING THROUGH AN OBJECT ----------
let scores = { math: 90, science: 85, english: 78 };
 
// for...in loop -> gives you the KEYS
for (let subject in scores) {
  console.log(subject, ":", scores[subject]);
}

// ---------- 9. Object.keys / Object.values / Object.entries ----------
console.log(Object.keys(scores));    // ["math", "science", "english"]
console.log(Object.values(scores));  // [90, 85, 78]
console.log(Object.entries(scores)); // [["math",90], ["science",85], ["english",78]]
 
// entries() is useful for looping with both key and value at once
for (let [subject, score] of Object.entries(scores)) {
  console.log(`${subject} -> ${score}`);
}
 
 

// ---------- 10. METHODS (functions inside objects) ----------
let calculator = {
  a: 10,
  b: 5,
  add: function () {
    return calculator.a + calculator.b;
  },
  // shorthand method syntax (same as above, cleaner)
  subtract() {
    return this.a - this.b; // "this" refers to the object calling the method
  },
};
 
console.log(calculator.add());      // 15
console.log(calculator.subtract()); // 5


// ---------- 11. "this" KEYWORD - COMMON TRAP ----------
let user = {
  name: "Mariam",
  greet: function () {
    console.log("Hi, I'm " + this.name); // works - "this" = user
  },
};
user.greet(); // "Hi, I'm Mariam"
 
// If you pull the method out separately, "this" breaks
let greetAlone = user.greet;
// greetAlone(); // would fail or give undefined - "this" loses its connection to user


// ---------- 12. SHORTHAND PROPERTY NAMES ----------
let name = "Ali";
let age = 25;
 
// old way: { name: name, age: age }
let shorthandPerson = { name, age }; // same result, less typing
console.log(shorthandPerson);
 

// ---------- 13. SPREAD OPERATOR (copy or merge objects) ----------
let base = { a: 1, b: 2 };
let extra = { c: 3 };
 
let merged = { ...base, ...extra };
console.log("Merged:", merged); // { a: 1, b: 2, c: 3 }
 
let copy = { ...base }; // shallow copy, not a reference
copy.a = 999;
console.log("Original unchanged:", base); // { a: 1, b: 2 }


// ---------- 14. DESTRUCTURING (pull properties into variables) ----------
let profile = { username: "mariam78m", followers: 200, verified: false };
 
let { username, followers } = profile;
console.log(username);   // "mariam78m"
console.log(followers);  // 200
 
// rename while destructuring
let { username: handle } = profile;
console.log(handle); // "mariam78m"


// ---------- 15. COMPARING OBJECTS ----------
let obj1 = { x: 1 };
let obj2 = { x: 1 };
let obj3 = obj1;
 
console.log(obj1 === obj2); // false -> different objects in memory, even if content matches
console.log(obj1 === obj3); // true  -> obj3 points to the SAME object as obj1


// ---------- 16. OBJECT.FREEZE (make an object unchangeable) ----------
let constants = { pi: 3.14 };
Object.freeze(constants);
constants.pi = 999; // fails silently (no error in non-strict mode)
console.log(constants.pi); // still 3.14


// ---------- 17. CHECKING IF SOMETHING IS AN OBJECT ----------
console.log(typeof person);        // "object"
console.log(typeof []);            // "object" -> arrays are technically objects too!
console.log(Array.isArray(person)); // false -> use this to tell objects and arrays apart


// ---------- 18. MINI PRACTICE PROBLEM ----------
// Count how many students passed (score >= 50) from a list of student objects
let students = [
  { name: "Ali", score: 45 },
  { name: "Sara", score: 70 },
  { name: "Bilal", score: 55 },
  { name: "Zara", score: 30 },
];
 
 