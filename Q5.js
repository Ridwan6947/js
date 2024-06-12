let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
let hashSet = {};
let uniqueArray = [];
let sum = 0;
let min = arr[0];
let max = arr[0];
let primeCount = 0;


for(let i = 0 ; i < arr.length ; i++){
    sum += arr[i];
    if(arr[i] < min){
        min = arr[i];
    }
    if(arr[i] > max){
        max = arr[i];
    }
    if(isPrime(arr[i])){
        primeCount++;
    }
}

for(let i = 0 ; i < arr.length ; i++){
    let currValue = arr[i];
    if(!hashSet[currValue]){
        hashSet[currValue] = true;
        uniqueArray.push(currValue);
    }
}
function isPrime(num){
    if(num <= 1){
        return false;
    }
    if(num === 2){
        return true;
    }
    if(num % 2 === 0){
        return false;
    }
    for(let i = 3 ; i <= Math.sqrt(num) ; i += 2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(sum);
console.log(min);
console.log(max);
if(primeCount === 1){
    console.log('List has a prime no')
}
if(primeCount === arr.length){
    console.log('List is full of prime no')
}
console.log(uniqueArray)