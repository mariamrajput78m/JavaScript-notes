// ==========================================
// JAVASCRIPT DATES
// ==========================================

// JavaScript provides the Date object
// to work with dates and time.

// ==========================================
// Current Date and Time
// ==========================================

// Create a Date object

let today = new Date();

console.log(today);

// Example Output:
// 2026-08-07T18:30:45.123Z



// ==========================================
// Convert Date to String
// ==========================================

console.log(today.toString());

// Example:
// Fri Aug 07 2026 23:30:45 GMT+0500



// ==========================================
// toDateString()
// ==========================================

// Displays only the date.

console.log(today.toDateString());

// Example:
// Fri Aug 07 2026



// ==========================================
// toTimeString()
// ==========================================

// Displays only the time.

console.log(today.toTimeString());



// ==========================================
// toLocaleString()
// ==========================================

// Date and time according to local region.

console.log(today.toLocaleString());



// ==========================================
// toLocaleDateString()
// ==========================================

// Displays only the date.

console.log(today.toLocaleDateString());



// ==========================================
// toLocaleTimeString()
// ==========================================

// Displays only the time.

console.log(today.toLocaleTimeString());



// ==========================================
// Create Custom Date
// ==========================================

// Month starts from 0.

// January = 0
// February = 1
// March = 2

let birthday = new Date(2005, 10, 15);

console.log(birthday.toDateString());



// ==========================================
// Different Date Formats
// ==========================================

let date1 = new Date("2026-08-07");

console.log(date1);

let date2 = new Date("08-07-2026");

console.log(date2);



// ==========================================
// Timestamp
// ==========================================

// Milliseconds since
// January 1, 1970.

console.log(Date.now());



// ==========================================
// Get Timestamp of Date Object
// ==========================================

console.log(today.getTime());



// ==========================================
// Convert Timestamp to Seconds
// ==========================================

console.log(Math.floor(Date.now() / 1000));



// ==========================================
// Get Individual Values
// ==========================================

console.log(today.getFullYear());

console.log(today.getMonth());

// January = 0

console.log(today.getDate());

console.log(today.getDay());

// Sunday = 0

console.log(today.getHours());

console.log(today.getMinutes());

console.log(today.getSeconds());



// ==========================================
// Custom Local Format
// ==========================================

console.log(

    today.toLocaleString('default',{

        weekday: "long"

    })

);

// Example:
// Friday



// ==========================================
// Mini Project Example
// ==========================================

// Display today's year.

console.log(

    "Current Year:",

    today.getFullYear()

);



// ==========================================
// Challenge 1
// ==========================================

// Print

// Current Month

// Current Day

// Current Year



// ==========================================
// Challenge 2
// ==========================================

// Create your birthday

// and print it using

// toDateString()