const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const frequency = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1; // Increment the count for each letter
    return acc; // Return the accumulator for the next iteration
}, {});
console.log(frequency); // Output: { a: 3, b: 2, c: 1 }