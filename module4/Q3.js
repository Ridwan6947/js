let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arraySum = findSum(array);

function findSum(arr) {
    if(arr.length ===0){
        return 0;
    }
    return arr[0] + findSum(arr.slice(1));
}

console.log(arraySum);