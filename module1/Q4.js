let arr = [0, 2, 4, 6, 8, 10, 12, 14, 16];

let twiceArray = [];
let halfArray = [];

for(let i = 0; i < arr.length; i++) {
    twiceArray.push(arr[i] * 2);
    halfArray.push(arr[i] / 2);
}

console.log(twiceArray);
console.log(halfArray);