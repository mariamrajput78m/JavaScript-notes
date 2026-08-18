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

// ---------- 2. GETTING PARTS OF A DATE ----------
let d = new Date(2026, 7, 17, 14, 30, 0); // Aug 17, 2026, 2:30 PM
 
console.log("Year:", d.getFullYear());     // 2026
console.log("Month:", d.getMonth());       // 7 -> remember, 0-indexed (August)
console.log("Day of month:", d.getDate()); // 17
console.log("Day of week:", d.getDay());   // 0 = Sunday, 1 = Monday, etc.
console.log("Hours:", d.getHours());       // 14
console.log("Minutes:", d.getMinutes());   // 30
console.log("Seconds:", d.getSeconds());   // 0
 
 
// ---------- 3. SETTING PARTS OF A DATE ----------
let editable = new Date(2026, 7, 17);
editable.setFullYear(2027);
editable.setMonth(0); // January
editable.setDate(1);
console.log("After edits:", editable); // Jan 1, 2027
 
// ---------- 4. TIMESTAMPS (milliseconds since epoch) ----------
let ts = Date.now(); // current timestamp, no need to create a Date object
console.log("Current timestamp:", ts);
 
let dateFromNow = new Date();
console.log("Date to timestamp:", dateFromNow.getTime());
 
 
// ---------- 5. DATE MATH (ADD/SUBTRACT DAYS) ----------
// There's no built-in "addDays" method - you do it manually
function addDays(date, days) {
  let result = new Date(date); // copy, so we don't mutate the original
  result.setDate(result.getDate() + days);
  return result;
}

let today = new Date(2026, 7, 17);
let nextWeek = addDays(today, 7);
console.log("Today:", today);
console.log("Next week:", nextWeek);

