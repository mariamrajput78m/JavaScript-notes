=========================
JAVASCRIPT LOOPS
=========================

WHAT IS A LOOP?

A loop repeats a block of code multiple times.

Instead of writing

console.log("Hello");
console.log("Hello");
console.log("Hello");

we use loops.

---------------------------------------

FOR LOOP

Syntax

for(initialization; condition; update){

}

Example

for(let i=1;i<=5;i++){

    console.log(i);

}

Output

1
2
3
4
5

---------------------------------------

WHILE LOOP

let i = 1;

while(i<=5){

    console.log(i);

    i++;

}

---------------------------------------

DO WHILE LOOP

let i=1;

do{

    console.log(i);

    i++;

}while(i<=5);

Runs at least once.

---------------------------------------

BREAK

Stops the loop immediately.

for(let i=1;i<=10;i++){

    if(i===5){

        break;

    }

    console.log(i);

}

Output

1
2
3
4

---------------------------------------

CONTINUE

Skips current iteration.

for(let i=1;i<=5;i++){

    if(i===3){

        continue;

    }

    console.log(i);

}

Output

1
2
4
5

---------------------------------------

NESTED LOOPS

A loop inside another loop.

Used for

✔ Tables

✔ Patterns

✔ Grids

---------------------------------------

COMMON MISTAKES

❌ Infinite Loop

while(true){

}

Always make sure the loop condition becomes false.

---------------------------------------

WHEN TO USE

for

When number of iterations is known.

while

When number of iterations is unknown.

---------------------------------------

INTERVIEW QUESTIONS

1. What is a loop?

2. Difference between for and while?

3. What is break?

4. What is continue?

5. What is an infinite loop?

---------------------------------------

PRACTICE

✔ Number Table

✔ Multiplication Table

✔ Sum of Numbers

✔ Countdown Timer

✔ Pattern Printing