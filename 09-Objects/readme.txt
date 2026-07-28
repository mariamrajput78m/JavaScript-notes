/*# ☕ JavaScript Objects

Objects are one of the most important data structures in JavaScript. They allow us to store related information in the form of **key-value pairs**.

---

# 📚 What is an Object?

An object is a collection of properties.

Each property has:
- **Key (Property Name)**
- **Value**

```javascript
const person = {
    name: "Mariam",
    age: 19,
    isStudent: true
};
```

Here,

- `name` → Key
- `"Mariam"` → Value

---

# 📝 Creating an Object

```javascript
const user = {
    username: "Mariam",
    followers: 195,
    following: 4,
    isLoggedIn: true
};
```

---

# 📖 Accessing Object Values

## 1. Dot Notation (Recommended)

```javascript
console.log(user.username);
console.log(user.followers);
```

Output

```
Mariam
195
```

---

## 2. Bracket Notation

```javascript
console.log(user["username"]);
console.log(user["followers"]);
```

Output

```
Mariam
195
```

### ❌ Wrong

```javascript
console.log(user[username]);
```

JavaScript thinks `username` is a variable.

Correct:

```javascript
user["username"]
```

---

# ✏️ Updating Values

```javascript
user.followers = 250;
```

or

```javascript
user["followers"] = 250;
```

---

# ➕ Adding New Properties

```javascript
user.city = "Karachi";
```

Result

```javascript
{
    username: "Mariam",
    followers: 250,
    following: 4,
    isLoggedIn: true,
    city: "Karachi"
}
```

---

# ❌ Deleting Properties

```javascript
delete user.city;
```

---

# 🎯 Object with Different Data Types

```javascript
const profile = {
    username: "Mariam",
    age: 19,
    isVerified: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};
```

Objects can contain:

- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Null

---

# 🔑 Object.keys()

Returns all property names.

```javascript
console.log(Object.keys(profile));
```

Output

```javascript
[
    "username",
    "age",
    "isVerified",
    "skills",
    "address"
]
```

---

# 🔑 Object.values()

Returns all values.

```javascript
console.log(Object.values(profile));
```

---

# 🔑 Object.entries()

Converts object into an array.

```javascript
console.log(Object.entries(profile));
```

Output

```javascript
[
    ["username","Mariam"],
    ["age",19],
    ["isVerified",true]
]
```

---

# 🔍 hasOwnProperty()

Checks if a property exists.

```javascript
console.log(profile.hasOwnProperty("username"));
```

Output

```
true
```

---

# 🧊 Freezing an Object

Prevents changes.

```javascript
Object.freeze(profile);

profile.username = "Ali";

console.log(profile.username);
```

Output

```
Mariam
```

---

# 📝 Object Destructuring

Instead of writing

```javascript
console.log(profile.username);
```

Use

```javascript
const { username } = profile;

console.log(username);
```

---

# 📌 Nested Objects

```javascript
const student = {
    name: "Mariam",
    marks: {
        math: 90,
        english: 85
    }
};
```

Access

```javascript
console.log(student.marks.math);
```

Output

```
90
```

---

# 📌 Objects Inside Arrays

```javascript
const users = [
    {
        name: "Mariam",
        age: 19
    },
    {
        name: "Ali",
        age: 21
    }
];
```

Access

```javascript
console.log(users[0].name);
```

Output

```
Mariam
```

---

# ⭐ Useful Object Methods

| Method | Purpose |
|---------|---------|
| Object.keys() | Returns all keys |
| Object.values() | Returns all values |
| Object.entries() | Returns key-value pairs |
| Object.freeze() | Prevents modifications |
| Object.assign() | Combines objects |
| hasOwnProperty() | Checks property existence |

---

# 🔥 Interview Questions

### Difference between Array and Object?

| Array | Object |
|-------|--------|
| Ordered collection | Key-value collection |
| Uses index | Uses keys |
| [] | {} |

---

### Dot vs Bracket Notation

```javascript
user.name
```

```javascript
user["name"]
```

Use bracket notation when:

```javascript
const key = "name";

console.log(user[key]);
```

---

# 📚 Practice Questions

### Q1

Create an object for a student.

```javascript
const student = {
    name: "Mariam",
    age: 19,
    grade: "A"
};
```

---

### Q2

Add a new property called `city`.

---

### Q3

Delete the `grade` property.

---

### Q4

Print all keys using `Object.keys()`.

---

### Q5

Freeze an object and try changing its value.

---

# 📖 Summary

✔ Objects store data in key-value pairs.

✔ Access values using:
- Dot notation (`user.name`)
- Bracket notation (`user["name"]`)

✔ Objects can store:
- Strings
- Numbers
- Arrays
- Objects
- Booleans

✔ Common methods:
- `Object.keys()`
- `Object.values()`
- `Object.entries()`
- `Object.freeze()`
- `Object.assign()`

---

## 💻 Keep Learning

> "Practice is the key to mastering JavaScript. Build small projects and use objects everywhere!"*/