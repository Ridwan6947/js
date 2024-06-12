let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

let sum = 0;
let min = arr[0];
let max = arr[0];

for(let i = 0 ; i < arr.length ; i++){
    sum += arr[i];
    if(arr[i] < min){
        min = arr[i];
    }
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(sum);
console.log(min);
console.log(max);