const arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
const arr2 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19];

const hasDuplicates = arr2.some((num,index) => arr2.indexOf(num) !== index);
console.log(hasDuplicates);


const hasDublicates = arr.some((num,index) => arr.indexOf(num) !== index);
console.log(hasDublicates);

