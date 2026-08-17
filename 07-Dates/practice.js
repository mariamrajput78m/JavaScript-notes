// ============================================
// PRACTICE: Dates in JavaScript
// ============================================
 
// ---------- 1. CREATING A DATE ----------
let now = new Date(); // current date and time
console.log("Now:", now);
 
// Specific date: year, month (0-indexed!), day, hour, min, sec
let specificDate = new Date(2026, 7, 17); // Aug 17, 2026 -> month 7 = August
console.log("Specific date:", specificDate);
 
// WARNING: months start at 0 (Jan = 0, Dec = 11). This trips everyone up.
let jan = new Date(2026, 0, 1);
console.log("January check:", jan); // Jan 1, 2026, not Feb
 
// From a date string
let fromString = new Date("2026-08-17");
console.log("From string:", fromString);
 
// From a timestamp (milliseconds since Jan 1, 1970)
let fromTimestamp = new Date(0);
console.log("From timestamp 0:", fromTimestamp); // Jan 1, 1970