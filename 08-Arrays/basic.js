// Array is Primitive Data Structure

// Mixed data types
let data = ["Mariam", 19, true, null];


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// let fruits = ["Apple", "Banana"];

// fruits.push("Orange");

//console.log(fruits);

// myArr.push(7)
// myArr.pop()  //Removes the last element.

// myArr.unshift(9) //Adds at the beginning.
// myArr.shift() //Removes the first element.

// Checking if smthg is in Array 
// let fruits = ["Apple", "Banana"];

// console.log(Array.isArray(fruits));


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

//Convert Array to String

let fruits = ["Apple","Banana","Orange"];

console.log(fruits.join(" - "));

//Loop through an Array

// let fruits = ["Apple" , "Banana" , "Mango"];

// for(let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i]);
// }


//for...of Loop
let fruit = ["Apple","Banana","Orange"];

for(let fr of fruit)
{
    console.log(fr);
}

// Primitive vs Reference
let arr1 = [1,2,3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);


/*
Most Important Array Methods
Method	Purpose
push()	Add at end
pop()	Remove from end
shift()	Remove from beginning
unshift()	Add at beginning
length	Total elements
join()	Convert to string
includes()	Check if value exists
indexOf()	Find index
slice()	Copy part of array (original unchanged)
splice()	Add/remove elements (original changes)
concat()	Merge arrays
reverse()	Reverse array
sort()	Sort array
forEach()	Execute function for each element
map()	Create a new transformed array
filter()	Select matching elements
reduce()	Combine values into one result
*/