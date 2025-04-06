// Boolean Values
let isLoggedIn = true;
let isAdmin = false;

console.log("isLoggedIn:", isLoggedIn); // true
console.log("isAdmin:", isAdmin);       // false

// Comparison Operators
let age = 21;
console.log("Is adult:", age >= 18); // true
console.log("Is teenager:", age < 20); // false

// Strict vs Loose Equality
let x = 5;
let y = "5";
console.log("x == y:", x == y);   // true
console.log("x === y:", x === y); // false

// Logical Operators
let hasAccount = true;
let verifiedEmail = false;
console.log("Can login (AND):", hasAccount && verifiedEmail); // false
console.log("Can login (OR):", hasAccount || verifiedEmail);  // true
console.log("Is guest:", !hasAccount); // false

// Truthy & Falsy Check
let testValue = "";
if (testValue) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // will print this
}
