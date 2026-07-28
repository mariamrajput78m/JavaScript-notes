// 1. Click Event
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Button Clicked!");
});

// 2. Arrow Function
btn.addEventListener("click", () => {
    console.log("Button Clicked!");
});

// 3. Change Text
const heading = document.getElementById("title");

btn.addEventListener("click", () => {
    heading.innerText = "Text Changed!";
});

// 4. Change Background Color
btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "pink";
});

// 5. Toggle Dark Mode
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// 6. Hide Element
btn.addEventListener("click", () => {
    heading.style.display = "none";
});

// 7. Show Element
btn.addEventListener("click", () => {
    heading.style.display = "block";
});

// 8. Toggle Visibility
btn.addEventListener("click", () => {
    if (heading.style.display === "none") {
        heading.style.display = "block";
    } else {
        heading.style.display = "none";
    }
});

// 9. Change CSS
btn.addEventListener("click", () => {
    heading.style.color = "red";
    heading.style.fontSize = "40px";
    heading.style.backgroundColor = "yellow";
});

// 10. Mouse Over
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue";
});

// 11. Mouse Leave
box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "gray";
});

// 12. Double Click
btn.addEventListener("dblclick", () => {
    alert("Double Clicked");
});

// 13. Right Click
btn.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Right Click Disabled");
});

// 14. Keyboard Event
document.addEventListener("keydown", (event) => {
    console.log(event.key);
});

// 15. Enter Key
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        alert("Enter Pressed");
    }
});

// 16. Input Event
const input = document.getElementById("name");

input.addEventListener("input", () => {
    console.log(input.value);
});

// 17. Focus Event
input.addEventListener("focus", () => {
    input.style.backgroundColor = "lightyellow";
});

// 18. Blur Event
input.addEventListener("blur", () => {
    input.style.backgroundColor = "white";
});

// 19. Change Event
const country = document.getElementById("country");

country.addEventListener("change", () => {
    console.log(country.value);
});

// 20. Form Submit
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form Submitted");
});

// 21. Create Element
const h2 = document.createElement("h2");

h2.innerText = "Hello DOM";

document.body.appendChild(h2);

// 22. Remove Element
// heading.remove();

// 23. Toggle Class
btn.addEventListener("click", () => {
    heading.classList.toggle("active");
});

// 24. Count Button Clicks
let count = 0;

btn.addEventListener("click", () => {
    count++;
    console.log(`Clicked ${count} times`);
});

// 25. Random Background Colour
const colors = ["red", "blue", "green", "orange", "purple"];

btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
});

// 26. Live Character Counter
const textarea = document.getElementById("message");
const counter = document.getElementById("count");

textarea.addEventListener("input", () => {
    counter.innerText = textarea.value.length;
});