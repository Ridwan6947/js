let employee = {
    name:"Ridwan",
    company:"HotWax Commerce"
}

let emp1 = JSON.parse(JSON.stringify(employee));

console.log(emp1.name + " " + emp1.company);