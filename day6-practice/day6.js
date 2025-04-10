let arr = [1, 2, 3, 4, 5, 6];
let evenArr = arr.filter(num => num % 2 === 0);
let squaredEvenArr = evenArr.map(num => num*num);
let sumOfSquares = squaredEvenArr.reduce((acc,curr) => acc + curr, 0);
console.log(sumOfSquares); // Output: 56 (2^2 + 4^2 + 6^2 = 4 + 16 + 36 = 56)

let oddArr = arr.filter(num => num % 2 !== 0);
let squaredOddArr = oddArr.map(num => num*num);
let sumOfSquaresOdd = squaredOddArr.reduce((acc,curr) => acc + curr, 0);
console.log(sumOfSquaresOdd); // Output: 35 (1^2 + 3^2 + 5^2 = 1 + 9 + 25 = 35)

let sumArr = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArr); // Output: 21 (1 + 2 + 3 + 4 + 5 + 6 = 21)
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
console.log(evenArr); // Output: [2, 4, 6]