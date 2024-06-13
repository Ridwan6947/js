let array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

let sum = array.reduce((x,y) => x + y , 0)
let maxNumber = array.reduce((x,y) => x > y ? x : y);
let minNumber = array.reduce((x,y) => x < y ? x : y);

let allPrimeNumber = array.every(isPrime);

function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;

}
let anyPrime = array.some(isPrime);

if (anyPrime) {
    console.log("List has a prime no");
} else {
    console.log("List does not have a prime no");
}

let uniqueArray = array.filter((x,y) => array.indexOf(x) === y);

console.log(sum);
console.log(maxNumber);
console.log(minNumber);
console.log(allPrimeNumber);
console.log(anyPrime);
console.log(uniqueArray);