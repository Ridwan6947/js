//When using callbacks we should use arrow instead of regular functions becuase
//In JavaScript, the value of this inside a regular function depends on how the function is called, 
//while in arrow functions,this retains the value of the enclosing lexical context.


function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    setTimeout(function(){
        console.log("Hi , i am  " + this.name);
    },2000)   
}

const person = new Person("Ridwan");
person.sayHi();

function Person1(name){
    this.name = name;
}

Person1.prototype.sayHi1 = function(){
    setTimeout(() =>{
        console.log("Hi , i am  " + this.name);
    },2000)
}

const person1 = new Person1("Ridwan");
person1.sayHi1()