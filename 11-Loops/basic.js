// =======================================
// JAVASCRIPT FUNCTIONS
// =======================================

// A function is a reusable block of code.
// Instead of writing the same code again and again,
// we write it once and call it whenever needed.



// =======================================
// Example 1
// Simple Function
// =======================================

// Function Declaration
function greet() {

    // This line prints Hello on the console
    console.log("Hello!");

}

// Calling the function
greet();





// =======================================
// Example 2
// Function with Parameters
// =======================================

// "name" is called a Parameter
function greetUser(name){

    console.log("Hello " + name);

}

// "Mariam" is called an Argument
greetUser("Mariam");
greetUser("Ali");
greetUser("Sara");





// =======================================
// Example 3
// Multiple Parameters
// =======================================

function add(num1, num2){

    console.log(num1 + num2);

}

add(10,20);
add(4,7);





// =======================================
// Example 4
// Return Keyword
// =======================================

// return sends a value back

function multiply(a,b){

    return a*b;

}

let answer = multiply(5,4);

console.log(answer);





// =======================================
// Example 5
// Function Expression
// =======================================

const message = function(){

    console.log("Learning JavaScript");

}

message();





// =======================================
// Example 6
// Arrow Function
// =======================================

const square = (number)=>{

    return number*number;

}

console.log(square(5));





// =======================================
// Example 7
// Short Arrow Function
// =======================================

const cube = number => number*number*number;

console.log(cube(3));





// =======================================
// Example 8
// Real Example
// Click Counter
// =======================================

// Imagine our counter project

function updateCounter(){

    console.log("Counter Updated");

}

updateCounter();





// =======================================
// Common Mistakes
// =======================================

// Wrong

// greet;

// Correct

// greet();



// Wrong

// function add(){
//     2+3;
// }

// Correct

// function add(){
//     return 2+3;
// }





// =======================================
// Challenge
// =======================================

// Create a function

// sayWelcome(name)

// Output

// Welcome Mariam