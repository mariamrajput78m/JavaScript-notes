# JavaScript Callbacks & Callback Hell

## Callback

A callback is a function passed as an argument to another function.

```js
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Mariam");
}

processUser(greet);