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