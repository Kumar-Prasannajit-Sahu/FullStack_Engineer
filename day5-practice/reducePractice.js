const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("Sum:", sum); // Output: 10

const product = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1)
console.log("Product:", product); // Output: 24

const maxValue = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, numbers[0]);
console.log("Max Value:", maxValue); // Output: 4