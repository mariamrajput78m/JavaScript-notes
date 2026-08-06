// ==========================================
// JAVASCRIPT NUMBERS & MATH
// ==========================================

// JavaScript provides the Math object
// to perform mathematical operations.



// ==========================================
// Basic Arithmetic
// ==========================================

let num1 = 20;
let num2 = 5;

console.log(num1 + num2); // 25

console.log(num1 - num2); // 15

console.log(num1 * num2); // 100

console.log(num1 / num2); // 4

console.log(num1 % num2); // 0



// ==========================================
// Math.abs()
// ==========================================

// Returns positive value.

console.log(Math.abs(-15));

// Output

// 15



// ==========================================
// Math.round()
// ==========================================

// Rounds to nearest integer.

console.log(Math.round(4.4));

console.log(Math.round(4.6));

// Output

// 4

// 5



// ==========================================
// Math.ceil()
// ==========================================

// Always rounds UP.

console.log(Math.ceil(4.1));

// Output

// 5



// ==========================================
// Math.floor()
// ==========================================

// Always rounds DOWN.

console.log(Math.floor(4.9));

// Output

// 4



// ==========================================
// Math.random()
// ==========================================

// Gives random number
// between 0 and 1.

console.log(Math.random());



// ==========================================
// Random Number 1 to 10
// ==========================================

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);



// ==========================================
// Math.max()
// ==========================================

console.log(

    Math.max(10,25,8,60)

);

// Output

// 60



// ==========================================
// Math.min()
// ==========================================

console.log(

    Math.min(10,25,8,60)

);

// Output

// 8



// ==========================================
// Math.pow()
// ==========================================

// Power

console.log(

    Math.pow(2,4)

);

// Output

// 16



// ==========================================
// Math.sqrt()
// ==========================================

// Square Root

console.log(

    Math.sqrt(81)

);

// Output

// 9



// ==========================================
// Number Methods
// ==========================================

let score = 98.765;

// Convert to String

console.log(

    score.toString()

);

// Fixed decimal places

console.log(

    score.toFixed(2)

);

// Output

// 98.77



// ==========================================
// CHALLENGE
// ==========================================

// Generate a random number
// between 50 and 100.