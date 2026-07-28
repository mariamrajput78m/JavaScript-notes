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
