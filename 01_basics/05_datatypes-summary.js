// IV.Q.: In JavaScript how the data is kept in the memory and accessed on the basis of the data there TWO classifications,
// 1. Primitive Data Type(Copy Memory)
// 2. Non-primitive/Reference Data Type(Acaccess Original Memory)


// Primitive Data Types(7 Types): String, Number, Boolean, null, undefined, Symbol, BigInt.

// (1) String:
let lastName = "Johnson";

// (2) Number:
const score = 100
const scoreValue = 100.3

// (3) Boolean:
const isLoggedIn = false

// (4) null:
const outsideTemp = null // completely empty

// (5) undefined:
// let useEmail = undefined;
let useEmail;

// (6) Symbol:
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false
console.log(id);
console.log(anotherId);

// (7) BigInt:
const bigNumber = 234028045435203994n




// Non-primitive/Reference Data Type(3 Types)(Function DataType): Array, Object, Function.

// (1) Array:
const heros = ["superman", "batman", "spiderman"]

// (2) Object:
let person = {
    name: "fahim",
    age : 22,

}

// (3) Function:
const myFunction = function() {
    console.log("Hello World!");
}



// JavaScript typeof Operator for knowing data types:
console.log(typeof lastName); // string
console.log(typeof score); // number (Integer)
console.log(typeof scoreValue); // number (Float)
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object (IV.Q)
console.log(typeof useEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigint





console.log(typeof heros); // object
console.log(typeof person); // object
console.log(typeof myFunction); // (Object-Fuction Data Type)





// IV.Q Link: https://262.ecma-international.org/5.1/#sec-11.4.3