// Day 5 Practice - Arrays & Functions
// Day 5 - JavaScript Practice

// Array methods
let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango"); // Add
fruits.splice(1, 1);  // Remove "Banana"
console.log("Fruits:", fruits);

// Functions
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Prasannajit"));

// Arrow function
const square = num => num * num;
console.log("Square of 4:", square(4));
