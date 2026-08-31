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
 
 
