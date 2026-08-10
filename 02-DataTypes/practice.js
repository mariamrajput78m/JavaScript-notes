// ==========================================
// JAVASCRIPT VARIABLES - PRACTICE
// ==========================================


// ==========================================
// QUESTION 1
// ==========================================

/*
Write code that:

1. Stores your name.
2. Stores your age.
3. Stores your city.
4. Stores your semester.
5. Stores your favorite color.
6. Prints all of them using console.log().
*/

let name = "Mariam";
let age = 19;
let city = "Lahore";
let semester = "5th";
let favoriteColor = "White";

console.log(name, age, city, semester, favoriteColor);


// ==========================================
// QUESTION 2
// ==========================================

/*
Store information about your education.

Use the appropriate data type:

- University → String
- Degree → String
- Semester → Number
- CGPA → Number
- IsStudent → Boolean
*/

const university = "University of Lahore";
const degree = "BS Computer Science";
const currentSemester = 5;
const cgpa = 3.91;
const isStudent = true;

console.log(university);
console.log(degree);
console.log(currentSemester);
console.log(cgpa);
console.log(isStudent);


// ==========================================
// QUESTION 3
// ==========================================

/*
Create variables for a product:

- Product name
- Product price
- Quantity
- Is it available?

Then print all the information.
*/

let productName = "Notebook";
let productPrice = 500;
let quantity = 3;
let isAvailable = true;

console.log(productName);
console.log(productPrice);
console.log(quantity);
console.log(isAvailable);


// ==========================================
// QUESTION 4
// ==========================================

/*
Create two number variables.

Then print:

- First number
- Second number
- Sum
*/

let firstNumber = 25;
let secondNumber = 15;

console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);
console.log("Sum:", firstNumber + secondNumber);


// ==========================================
// QUESTION 5
// ==========================================

/*
Create variables for:

- Your name
- Your age

Then print a sentence like:

"My name is Mariam and I am 19 years old."
*/

let myName = "Mariam";
let myAge = 19;

console.log("My name is " + myName + " and I am " + myAge + " years old.");


// ==========================================
// QUESTION 6
// ==========================================

/*
Create two variables:

price = 1000
quantity = 4

Calculate the total price.

Expected result:

4000
*/

let price = 1000;
let itemQuantity = 4;

let totalPrice = price * itemQuantity;

console.log("Total price:", totalPrice);


// ==========================================
// QUESTION 7
// ==========================================

/*
Create a variable called score.

Store your marks in it.

Then create another variable called
passed that stores whether the score
is greater than or equal to 50.

Print both values.
*/

let score = 72;

let passed = score >= 50;

console.log("Score:", score);
console.log("Passed:", passed);


// ==========================================
// QUESTION 8
// ==========================================

/*
Create variables for:

- Total marks = 500
- Obtained marks = 425

Calculate the percentage.

Formula:

percentage = obtained marks / total marks * 100
*/

let totalMarks = 500;
let obtainedMarks = 425;

let percentage = (obtainedMarks / totalMarks) * 100;

console.log("Percentage:", percentage);


// ==========================================
// QUESTION 9
// ==========================================

/*
Create three number variables.

Find their average.

Example:

number1 = 10
number2 = 20
number3 = 30

Expected result:

20
*/

let number1 = 10;
let number2 = 20;
let number3 = 30;

let average = (number1 + number2 + number3) / 3;

console.log("Average:", average);


// ==========================================
// QUESTION 10
// ==========================================

/*
Create variables for:

- Your name
- Your favorite food
- Your favorite movie

Print a sentence using all three.

Example:

"My name is Mariam, my favorite food is
pizza, and my favorite movie is Titanic."
*/

let studentName = "Mariam";
let favoriteFood = "Pizza";
let favoriteMovie = "Inception";

console.log(
    "My name is " +
    studentName +
    ", my favorite food is " +
    favoriteFood +
    ", and my favorite movie is " +
    favoriteMovie +
    "."
);


// ==========================================
// QUESTION 11
// ==========================================

/*
Create a variable called age.

Then create variables that determine:

- Is the person 18 or older?
- Is the person 25 or older?

Print both results.
*/

let personAge = 19;

let isAdult = personAge >= 18;
let isTwentyFiveOrOlder = personAge >= 25;

console.log("18 or older:", isAdult);
console.log("25 or older:", isTwentyFiveOrOlder);


// ==========================================
// QUESTION 12
// ==========================================

/*
Create variables for a shopping bill:

Item price = 750
Quantity = 2
Delivery fee = 150

Calculate:

subtotal
final total
*/

let itemPrice = 750;
let shoppingQuantity = 2;
let deliveryFee = 150;

let subtotal = itemPrice * shoppingQuantity;
let finalTotal = subtotal + deliveryFee;

console.log("Subtotal:", subtotal);
console.log("Delivery fee:", deliveryFee);
console.log("Final total:", finalTotal);


// ==========================================
// QUESTION 13
// ==========================================

/*
Create a variable called temperature.

Store:

temperature = 35

Create two variables:

isHot → temperature greater than 30
isVeryHot → temperature greater than 40

Print both.
*/

let temperature = 35;

let isHot = temperature > 30;
let isVeryHot = temperature > 40;

console.log("Is it hot?", isHot);
console.log("Is it very hot?", isVeryHot);


// ==========================================
// QUESTION 14
// ==========================================

/*
Create a bank balance.

Start with:

balance = 10000

Then:

Add 2500
Subtract 1500

Print the final balance.
*/

let balance = 10000;

balance = balance + 2500;
balance = balance - 1500;

console.log("Final balance:", balance);


// ==========================================
// QUESTION 15
// ==========================================

/*
Create variables for a student's marks:

English = 80
Math = 75
Programming = 90

Calculate:

1. Total marks
2. Average marks

Print both.
*/

let english = 80;
let math = 75;
let programming = 90;

let total = english + math + programming;
let averageMarks = total / 3;

console.log("Total marks:", total);
console.log("Average marks:", averageMarks);


// ==========================================
// QUESTION 16 - CHALLENGE
// ==========================================

/*
You have:

money = 5000
shirt = 1800
shoes = 2500

Calculate:

1. Total spending
2. Remaining money

Print both.
*/

let money = 5000;
let shirt = 1800;
let shoes = 2500;

let spending = shirt + shoes;
let remainingMoney = money - spending;

console.log("Total spending:", spending);
console.log("Remaining money:", remainingMoney);


// ==========================================
// QUESTION 17 - CHALLENGE
// ==========================================

/*
Create:

hoursStudied = 4
hoursSleeping = 7
hoursUniversity = 6

Calculate how many hours are left
in a 24-hour day.

Expected idea:

24 - (study + sleep + university)
*/

let hoursStudied = 4;
let hoursSleeping = 7;
let hoursUniversity = 6;

let remainingHours = 24 - (
    hoursStudied +
    hoursSleeping +
    hoursUniversity
);

console.log("Remaining hours:", remainingHours);


// ==========================================
// QUESTION 18 - CHALLENGE
// ==========================================

/*
Create a simple student profile.

Store:

- Name
- Age
- University
- Degree
- Semester
- CGPA
- Is student

Then print everything in a readable format.
*/

let profileName = "Mariam";
let profileAge = 19;
let profileUniversity = "University of Lahore";
let profileDegree = "BS Computer Science";
let profileSemester = 5;
let profileCGPA = 3.91;
let profileIsStudent = true;

console.log("----- STUDENT PROFILE -----");
console.log("Name:", profileName);
console.log("Age:", profileAge);
console.log("University:", profileUniversity);
console.log("Degree:", profileDegree);
console.log("Semester:", profileSemester);
console.log("CGPA:", profileCGPA);
console.log("Student:", profileIsStudent);


// ==========================================
// END OF VARIABLES PRACTICE
// ==========================================

/*
WHAT WE PRACTICED:

- Declaring variables
- let
- const
- Strings
- Numbers
- Booleans
- console.log()
- Arithmetic operators
- Comparison operators
- Updating variables
- Storing calculated values
- Using variables together
*/