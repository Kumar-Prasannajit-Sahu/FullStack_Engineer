// Random Number between 1 and 100
let num1 = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100:", num1);

// Even or Odd using ternary operator
let num2 = 22;
let res = num2 % 2 === 0 ? "even" : "odd";
console.log(`${num2} is ${res}`);

// Question 3: Perform basic arithmetic operations between two numbers
let a = 10;
let b = 3;

console.log("Addition:", a + b);         // 13
console.log("Subtraction:", a - b);      // 7
console.log("Multiplication:", a * b);   // 30
console.log("Division:", a / b);         // 3.33
console.log("Modulus:", a % b);          // 1

// Question 4: Use comparison operators to compare two numbers
let x = 5;
let y = 10;

console.log("x == y:", x == y);       // false
console.log("x != y:", x != y);       // true
console.log("x > y:", x > y);         // false
console.log("x < y:", x < y);         // true
console.log("x >= y:", x >= y);       // false
console.log("x <= y:", x <= y);       // true
console.log("x === y:", x === y);     // false (checks value + type)
console.log("x !== y:", x !== y);     // true
console.log("x === '5':", x === "5"); // false (checks value + type)
console.log("x == '5':", x == "5");   // true (checks value only)