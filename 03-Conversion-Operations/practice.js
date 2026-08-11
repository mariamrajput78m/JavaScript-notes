// ==========================================
// JAVASCRIPT - CONVERSION & OPERATIONS
// PRACTICE QUESTIONS
// ==========================================


// ==========================================
// PART 1 — TYPE CONVERSION
// ==========================================


// ==========================================
// QUESTION 1
// ==========================================

/*
Convert the following string into a Number.

"25"

Then print:

- The converted value
- Its type
*/

let value1 = "25";

let convertedValue1 = Number(value1);

console.log(convertedValue1);
console.log(typeof convertedValue1);


// ==========================================
// QUESTION 2
// ==========================================

/*
Convert the following number into a String.

100

Then print:

- The converted value
- Its type
*/

let value2 = 100;

let convertedValue2 = String(value2);

console.log(convertedValue2);
console.log(typeof convertedValue2);


// ==========================================
// QUESTION 3
// ==========================================

/*
Convert these strings into numbers:

"10"
"20"

Then add them.

Expected output:

30
*/

let num1 = "10";
let num2 = "20";

let convertedNum1 = Number(num1);
let convertedNum2 = Number(num2);

console.log(convertedNum1 + convertedNum2);


// ==========================================
// QUESTION 4
// ==========================================

/*
What happens when you convert these
values to Number?

"50"
"hello"
""
"25abc"

Print the results.
*/

console.log(Number("50"));
console.log(Number("hello"));
console.log(Number(""));
console.log(Number("25abc"));

// Important:
//
// Number("50")     → 50
// Number("hello")  → NaN
// Number("")       → 0
// Number("25abc")  → NaN
//
// NaN means:
// Not a Number



// ==========================================
// QUESTION 5
// ==========================================

/*
Convert these values to Boolean:

1
0
"hello"
""
*/

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));


// Boolean conversion:
//
// Boolean(1)       → true
// Boolean(0)       → false
// Boolean("hello") → true
// Boolean("")      → false



// ==========================================
// PART 2 — ARITHMETIC OPERATORS
// ==========================================


// ==========================================
// QUESTION 6
// ==========================================

/*
Create two numbers:

a = 20
b = 5

Print:

Addition
Subtraction
Multiplication
Division
*/

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);


// ==========================================
// QUESTION 7
// ==========================================

/*
Create:

number = 17

Find the remainder when 17 is divided
by 5.

Use the modulus (%) operator.

Expected output:

2
*/

let number = 17;

console.log(number % 5);
// ==========================================
// QUESTION 8
// ==========================================

/*
Create:

number = 10

Increase it by 1 using ++.

Print the result.
*/

let count = 10;

count++;

console.log(count);


// ==========================================
// QUESTION 9
// ==========================================

/*
Create:

number = 10

Decrease it by 1 using --.

Print the result.
*/

let counter = 10;

counter--;

console.log(counter);


// ==========================================
// QUESTION 10
// ==========================================

/*
Calculate the total cost:

Price = 250
Quantity = 4

Formula:

total = price * quantity
*/

let itemPrice = 250;
let itemQuantity = 4;

let totalCost = itemPrice * itemQuantity;

console.log("Total:", totalCost);


// ==========================================
// PART 3 — ASSIGNMENT OPERATORS
// ==========================================


// ==========================================
// QUESTION 11
// ==========================================

/*
Start with:

let balance = 5000;

Add 1000 to balance using +=.

Print the result.
*/

let balance = 5000;

balance += 1000;

console.log(balance);


// ==========================================
// QUESTION 12
// ==========================================

/*
Start with:

let balance = 5000;

Subtract 1500 using -=.

Print the result.
*/

let accountBalance = 5000;

accountBalance -= 1500;

console.log(accountBalance);


// ==========================================
// QUESTION 13
// ==========================================

/*
Start with:

let number = 10;

Multiply it by 3 using *=.
*/

let multiplicationNumber = 10;

multiplicationNumber *= 3;

console.log(multiplicationNumber);


// ==========================================
// QUESTION 14
// ==========================================

/*
Start with:

let number = 20;

Divide it by 4 using /=.
*/

let divisionNumber = 20;

divisionNumber /= 4;

console.log(divisionNumber);


// ==========================================
// PART 4 — STRING + NUMBER
// ==========================================


// ==========================================
// QUESTION 15
// ==========================================

/*
What will happen?

let value = "10";
let result = value + 5;

Print result.

Then explain why the result is not 15.
*/

let stringNumber = "10";

let result = stringNumber + 5;

console.log(result);

// Output:
//
// "105"
//
// Because one value is a String.
//
// + can perform string concatenation.



// ==========================================
// QUESTION 16
// ==========================================

/*
Convert "10" into a Number first.

Then add 5.

Expected output:

15
*/

let stringValue = "10";

let numberValue = Number(stringValue);

console.log(numberValue + 5);


// ==========================================
// QUESTION 17
// ==========================================

/*
Create:

let age = "19";

Convert age into a Number.

Then add 1.

Expected output:

20
*/

let age = "19";

let numericAge = Number(age);

console.log(numericAge + 1);


// ==========================================
// PART 5 — PRACTICE WITH REAL EXAMPLES
// ==========================================


// ==========================================
// QUESTION 18
// ==========================================

/*
A product costs:

price = "1500"

The value is currently a String.

Convert it to a Number.

Then add a delivery fee of 200.

Print the final price.
*/

let productPrice = "1500";

let numericPrice = Number(productPrice);

let deliveryFee = 200;

let finalPrice = numericPrice + deliveryFee;

console.log("Final price:", finalPrice);
// ==========================================
// QUESTION 19
// ==========================================

/*
A student has:

obtainedMarks = "425"
totalMarks = 500

Convert obtainedMarks into a Number.

Then calculate the percentage.

Formula:

(obtainedMarks / totalMarks) * 100
*/

let obtainedMarks = "425";
let totalMarks = 500;

let numericMarks = Number(obtainedMarks);

let percentage = (numericMarks / totalMarks) * 100;

console.log("Percentage:", percentage);


// ==========================================
// QUESTION 20
// ==========================================

/*
You have:

money = "5000"
shopping = 3200

Convert money into a Number.

Then calculate how much money remains.
*/

let money = "5000";
let shopping = 3200;

let numericMoney = Number(money);

let remainingMoney = numericMoney - shopping;

console.log("Remaining money:", remainingMoney);


// ==========================================
// PART 6 — CHALLENGE
// ==========================================


// ==========================================
// QUESTION 21
// ==========================================

/*
You receive these values from a form:

quantity = "3"
price = "450"

Both values are Strings.

Convert BOTH into Numbers.

Then calculate the total price.
*/

let quantity = "3";
let price = "450";

let numericQuantity = Number(quantity);
let numericProductPrice = Number(price);

let total = numericQuantity * numericProductPrice;

console.log("Total price:", total);
// ==========================================
// QUESTION 22
// ==========================================

/*
A student's marks are stored as Strings:

math = "85"
english = "78"
programming = "92"

Convert all three into Numbers.

Then calculate:

1. Total marks
2. Average marks
*/

let mathMarks = "85";
let englishMarks = "78";
let programmingMarks = "92";

let numericMath = Number(mathMarks);
let numericEnglish = Number(englishMarks);
let numericProgramming = Number(programmingMarks);

let marksTotal =
    numericMath +
    numericEnglish +
    numericProgramming;

let marksAverage = marksTotal / 3;

console.log("Total:", marksTotal);
console.log("Average:", marksAverage);


// ==========================================
// QUESTION 23 — CHALLENGE
// ==========================================

/*
You have:

let temperature = "35";

Convert it into a Number.

Then increase the temperature by 2.

Print the final temperature.
*/

let temperature = "35";

let numericTemperature = Number(temperature);

numericTemperature += 2;

console.log("Temperature:", numericTemperature);


// ==========================================
// QUESTION 24 — CHALLENGE
// ==========================================

/*
You have:

let balance = "10000";

You spend:

2500

Then receive:

1500

Convert balance into a Number.

Calculate the final balance.
*/

let startingBalance = "10000";

let numericBalance = Number(startingBalance);

numericBalance -= 2500;
numericBalance += 1500;

console.log("Final balance:", numericBalance);


// ==========================================
// QUICK REVISION
// ==========================================

/*
TYPE CONVERSION
----------------

Number("100")
→ 100

String(100)
→ "100"

Boolean(1)
→ true

Boolean(0)
→ false


IMPORTANT
----------------

Number("hello")
→ NaN

Number("")
→ 0


ARITHMETIC OPERATORS
----------------

+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Remainder
++  Increase by 1
--  Decrease by 1


ASSIGNMENT OPERATORS
----------------

+=
-=
*=
/=
IMPORTANT DIFFERENCE
----------------

"10" + 5
→ "105"

Number("10") + 5
→ 15


The first one performs string
concatenation.

The second one performs addition.
*/


// ==========================================
// END OF PRACTICE
// ==========================================