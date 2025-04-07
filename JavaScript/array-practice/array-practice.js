let favFruits = ["Mango", "Banana", "Apple", "Guava"];
console.log("fruits List: ",favFruits.join(" | ")); // Print the array as a string with custom separator
console.log(favFruits[0]); // Access first element
console.log(favFruits[favFruits.length-1]); // Access last element

favFruits.push("Orange"); // Add "Orange" to the end of the array
console.log("after push: ",favFruits); // Print the updated array  

favFruits.shift(); // Remove the first element
console.log("after shift: ",favFruits); // Print the updated array

console.log("Includes Apple: ",favFruits.includes("Apple")); // Check if "Apple" is in the array

console.log("fruits List: ",favFruits.join(", ")); // Print the array as a string


console.log("new concepts: ");

let fruits = ["apple", "banana", "mango"];
fruits.push("grapes"); // Add "grapes" to the end of the array
console.log("after push: ",fruits); // Print the updated array
fruits.pop(); // Remove the last element
console.log("after pop: ",fruits); // Print the updated array
fruits.unshift("orange"); // Add "orange" to the beginning of the array
console.log("after unshift: ",fruits); // Print the updated array
console.log("After shift: ",fruits.shift()); // Remove the first element and print it
console.log("after shift: ",fruits); // Print the updated array