// ============================================
// PRACTICE: DOM (Document Object Model) in JavaScript
// ============================================
// NOTE: This file only works when linked inside an actual HTML page
// (DOM = the browser's live representation of your HTML).
// Running this file alone in Node.js will NOT work - there's no "document" there.


// Example HTML this file assumes exists somewhere on the page:
// <h1 id="title">Hello</h1>
// <p class="description">Some text</p>
// <ul id="list"><li>Item 1</li><li>Item 2</li></ul>
// <button id="myButton">Click me</button>
// <input id="myInput" type="text">

// ---------- 1. SELECTING ELEMENTS ----------
let title = document.getElementById("title");         // selects ONE element by id
let description = document.querySelector(".description"); // selects FIRST match (CSS selector)
let listItems = document.querySelectorAll("li");      // selects ALL matches, returns a NodeList


console.log(title);
console.log(description);
console.log(listItems); // NodeList(2) [li, li]

// ---------- 2. READING / CHANGING TEXT CONTENT ----------
console.log(title.textContent); // reads current text
title.textContent = "New Title"; // changes what's displayed
 
// innerHTML lets you insert actual HTML tags (be careful - can be a security risk with user input)
description.innerHTML = "This is <strong>bold</strong> text";


// ---------- 3. CHANGING ATTRIBUTES ----------
let input = document.getElementById("myInput");
 
console.log(input.getAttribute("type")); // "text"
input.setAttribute("placeholder", "Type here...");
input.setAttribute("type", "email");
 
console.log(input.value); // reads whatever the user typed
input.value = "default@example.com"; // sets the input's value directly



// ---------- 4. CHANGING STYLES ----------
title.style.color = "blue";
title.style.fontSize = "32px";
title.style.backgroundColor = "yellow";


// ---------- 5. WORKING WITH CLASSES ----------
title.classList.add("highlight");     // adds a class
title.classList.remove("highlight");  // removes a class
title.classList.toggle("active");     // adds it if missing, removes it if present
console.log(title.classList.contains("active")); // true or false


// ---------- 6. CREATING NEW ELEMENTS ----------
let newItem = document.createElement("li"); // creates an element, not yet on the page
newItem.textContent = "Item 3";
 
let list = document.getElementById("list");
list.appendChild(newItem); // now it actually shows up on the page
 

// ---------- 7. REMOVING ELEMENTS ----------
let firstItem = document.querySelector("li");
firstItem.remove(); // removes it from the page entirely


// ---------- 8. LOOPING THROUGH A NodeList ----------
let allItems = document.querySelectorAll("li");
allItems.forEach(function (item, index) {
  console.log(index, item.textContent);
});


// ---------- 9. EVENT LISTENERS (reacting to user actions) ----------
let button = document.getElementById("myButton");
 
button.addEventListener("click", function () {
  console.log("Button was clicked!");
});


// Arrow function version - same thing, more common style
button.addEventListener("click", () => {
  alert("You clicked the button!");
});

// ---------- 10. THE "event" OBJECT ----------
button.addEventListener("click", function (event) {
  console.log("Event type:", event.type);   // "click"
  console.log("Element clicked:", event.target); // the actual element that was clicked
});


// ---------- 11. COMMON EVENT TYPES ----------
input.addEventListener("input", function () {
  console.log("Current input value:", input.value); // fires on every keystroke
});
 
input.addEventListener("focus", () => console.log("Input focused"));
input.addEventListener("blur", () => console.log("Input lost focus"));

 
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});


// ---------- 12. PREVENTING DEFAULT BEHAVIOR ----------
// Useful for forms - stops the page from refreshing on submit
let form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // page won't reload
    console.log("Form submitted without refreshing the page");
  });
}


// ---------- 13. TRAVERSING THE DOM (parent/child/sibling) ----------
let listElement = document.getElementById("list");
 
console.log(listElement.children);        // direct child elements
console.log(listElement.firstElementChild); // first child
console.log(listElement.lastElementChild);  // last child
console.log(listElement.parentElement);     // the element that contains it
