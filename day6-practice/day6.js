let arr = [1, 2, 3, 4, 5, 6];
let evenArr = arr.filter(num => num % 2 === 0);
let squaredEvenArr = evenArr.map(num => num*num);
let sumOfSquares = squaredEvenArr.reduce((acc,curr) => acc + curr, 0);
console.log(sumOfSquares); // Output: 56 (2^2 + 4^2 + 6^2 = 4 + 16 + 36 = 56)