const people = [
    { "id": 1, "name": "Amit Kumar", "age": 25 },
    { "id": 2, "name": "Rahul Dixit", "age": 20 },
    { "id": 3, "name": "Ravi Joshi", "age": 55 },
    { "id": 4, "name": "Rohit Verma", "age": 35 },
    { "id": 5, "name": "Ajay Jain", "age": 17 }
];

const youngest = people.reduce((acc,cur) => acc.age < cur.age ? acc : cur);
const oldest = people.reduce((acc,cur) => acc.age > cur.age ? acc : cur);
const above18 = people.filter(person => person.age > 18);
const totalAge = people.reduce((acc , cur) => acc + cur.age , 0);
const avgAge = totalAge / people.length;
const startsWithA = people.filter(person => person.name [0] === 'A');
const startsWithR = people.filter(person => person.name [0] === 'R');

console.log(youngest);
console.log(oldest);
console.log(above18);
console.log(avgAge);
console.log(startsWithA);
console.log(startsWithR);