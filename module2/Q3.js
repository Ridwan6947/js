const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddArray = arr.filter(num => num % 2 !== 0);
const evenArray = arr.filter(num => num %2 === 0);
const primeArray = arr.filter(num => num > 1 && Array.from({length: num}, (_, i) => i + 1).every(i => num % i !== 0));
console.log(oddArray);
console.log(evenArray);
console.log(primeArray);

