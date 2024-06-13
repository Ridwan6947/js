//Question 3

let arr = [0,1,2,3,4,5,6,7,8,9,10];

let oddList = [];
let evenList = [];
let primeList = [];
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        primeList.push(arr[i]);
    }
    if (arr[i] % 2 === 0) {
        evenList.push(arr[i]);
    } else {
        oddList.push(arr[i]);
    }
}

console.log("Odd numbers:", oddList);
console.log("Even numbers:", evenList);
console.log("Prime numbers:", primeList);