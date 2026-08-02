=========================
JAVASCRIPT FUNCTIONS
=========================

WHAT IS A FUNCTION?

A function is a reusable block of code that performs a specific task.

Instead of writing the same code again and again,
we write it once inside a function and call it whenever needed.

---------------------------------------

Syntax

function functionName() {

    // code here

}

Example

function greet() {
    console.log("Hello!");
}

greet();

Output:
Hello!

---------------------------------------

WHY USE FUNCTIONS?

✔ Code Reusability
✔ Cleaner Code
✔ Easy to Read
✔ Easy to Debug

---------------------------------------

FUNCTION WITH PARAMETERS

Parameters are variables that receive values.

Example

function greet(name) {
    console.log("Hello " + name);
}

greet("Mariam");

Output:
Hello Mariam

---------------------------------------

ARGUMENTS

Arguments are the actual values passed to a function.

function add(a, b){

}

add(5,10);

Parameters → a, b

Arguments → 5, 10

---------------------------------------

RETURN

return sends a value back.

function add(a,b){
    return a+b;
}

let result = add(5,4);

console.log(result);

Output

9

---------------------------------------

FUNCTION EXPRESSION

const greet = function(){
    console.log("Hello");
}

---------------------------------------

ARROW FUNCTION

const greet = () => {
    console.log("Hello");
}

Short version

const square = num => num * num;

---------------------------------------

CALLING A FUNCTION

Function Definition

↓

Function Call

↓

Code Executes

---------------------------------------

COMMON MISTAKES

❌ Forgetting ()

greet;

✔

greet();

-------------------------------

❌ Forgetting return

function add(a,b){
    a+b;
}

returns undefined.

---------------------------------------

INTERVIEW QUESTIONS

1. What is a function?

2. Difference between Parameters and Arguments?

3. What does return do?

4. Difference between Function Declaration and Arrow Function?

---------------------------------------

PRACTICE

✔ Calculator

✔ Greeting App

✔ Temperature Converter

✔ BMI Calculator

✔ Click Counter (Our Project)