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