// Singleton
// Object.create()

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Mariam",
    "full name": "Mariam Rajput",
    [mySym]: "myKey1",
    age: 19,
    location: "Pakistan",
    email: "mariam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser);

// Accessing Object Properties
console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);

// Symbol Access
console.log(JsUser[mySym]);

// Updating Values
JsUser.email = "rajputmariam@gmail.com";
console.log(JsUser.email);

// Freeze Object
// Object.freeze(JsUser);

JsUser.email = "hello@gmail.com";
console.log(JsUser);

// Adding Functions
JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());


// **********************************************
// Part 2
// **********************************************

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Mariam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",

    fullname: {
        userfullname: {
            firstname: "Mariam",
            lastname: "Rajput"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// Combining Objects

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// Method 1
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

// Method 2 (Recommended)
const obj4 = { ...obj1, ...obj2 }
console.log(obj4);

// Array of Objects

const users = [
    {
        id: 1,
        email: "one@gmail.com"
    },

    {
        id: 2,
        email: "two@gmail.com"
    },

    {
        id: 3,
        email: "three@gmail.com"
    }
]

console.log(users[0].email);

// Object Methods

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// **********************************************
// Destructuring
// **********************************************

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
}

const { courseInstructor } = course
console.log(courseInstructor);

const { price } = course
console.log(price);

// Rename while destructuring

const { courseInstructor: instructor } = course

console.log(instructor);


// **********************************************
// JSON
// **********************************************

// {
//     "name": "Mariam",
//     "course": "JavaScript",
//     "price": "999"
// }

// [
//     {},
//     {},
//     {}
// ]