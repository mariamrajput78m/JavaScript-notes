const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Button Clicked!");
});


// Arrow function 
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Button Clicked!");
});


//
const heading = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    heading.innerText = "Text Changed!";
});


//
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "pink";
});

//
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
// .dark{
//     background:black;
//     color:white;
// }


//
const btn = document.getElementById("btn");
const heading = document.getElementById("title");

btn.addEventListener("click", () => {
    heading.style.display = "none";
});


//
btn.addEventListener("click", () => {
    heading.style.display = "block";
});


//Toggle Visibility
btn.addEventListener("click", () => {

    if (heading.style.display === "none") {
        heading.style.display = "block";
    } else {
        heading.style.display = "none";
    }

});

//8. Change CSS
btn.addEventListener("click", () => {

    heading.style.color = "red";
    heading.style.fontSize = "40px";
    heading.style.backgroundColor = "yellow";

});

//9. Mouse Over
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {

    box.style.backgroundColor = "blue";

});

//10. Mouse Leave
box.addEventListener("mouseleave", () => {

    box.style.backgroundColor = "gray";

});

//11. Double Click
btn.addEventListener("dblclick", () => {

    alert("Double Clicked");

});

//12. Right Click
btn.addEventListener("contextmenu", (event) => {

    event.preventDefault();

    alert("Right Click Disabled");

});

//13. Keyboard Event
document.addEventListener("keydown", (event) => {

    console.log(event.key);

});

//14. Enter Key
document.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        alert("Enter Pressed");
    }

});

//15. Input Event
<input type="text" id="name">
const input = document.getElementById("name");

input.addEventListener("input", () => {

    console.log(input.value);

});

//16. Focus Event

input.addEventListener("focus", () => {

    input.style.backgroundColor = "lightyellow";

});

//17. Blur Event
input.addEventListener("blur", () => {

    input.style.backgroundColor = "white";

});

//18. Change Event
<select id="country">
    <option>Pakistan</option>
    <option>India</option>
    <option>USA</option>
</select>
const country = document.getElementById("country");

country.addEventListener("change", () => {

    console.log(country.value);

});

//</input>19. Form Submit
<form id="form">
    <input type="text">
    <button>Submit</button>
</form>
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Form Submitted");

});
20. Create Element
const h2 = document.createElement("h2");

h2.innerText = "Hello DOM";

document.body.appendChild(h2);
21. Remove Element
const heading = document.getElementById("title");

heading.remove();
22. Toggle Class
btn.addEventListener("click", () => {

    heading.classList.toggle("active");

});
23. Count Button Clicks
let count = 0;

btn.addEventListener("click", () => {

    count++;

    console.log(`Clicked ${count} times`);

});
24. Random Background Colour
const colors = ["red", "blue", "green", "orange", "purple"];

btn.addEventListener("click", () => {

    const random = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[random];

});
25. Live Character Counter
<textarea id="message"></textarea>
<p id="count">0</p>
const textarea = document.getElementById("message");
const count = document.getElementById("count");

textarea.addEventListener("input", () => {

    count.innerText = textarea.value.length;

});

