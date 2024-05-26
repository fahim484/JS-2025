// const {score} = req.body


let score = 33
score = "33abc"
score = null
score = undefined
score = true
score = "fahim"

//console.log(typeof score);
// or
//console.log(typeof (score));

let valueInNumber = Number(score) // conversion
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


/**
 * "33" --> 33
 * "33abc" --> NaN (Not a Number) (Type: number)
 * true --> 1; false --> 0
 * 
 */


let isLoggedIn = 1
isLoggedIn = ""
isLoggedIn = "fahim"

let booleanIsLoggedIn = Boolean(isLoggedIn)  // conversion
//console.log(booleanIsLoggedIn);

/**
 * 1 --> true; 0 --> false
 * "" --> false
 * "fahim" --> true
 */


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);



// ************************* Operations *****************************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " fahim"

let str3 = str1 + str2
// console.log(str3);


// ! bad code:
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// ? good code:
// console.log((3 + 4) * 5 % 3);

// ! bad code:
console.log(true);
// console.log(+true);
// console.log(+"");



let num1, num2, num3
num1 = num2 = num3 = 2 + 2


let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter);


// ???????? Prefix and Postfix Example:
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// ???????? Postfix increment:
let x1 = 3;
const y1 = x1++;
// x1 is 4; y1 is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

// ???????? Prefix increment
let x4 = 3;
const y4 = ++x4;
// x4 is 4; y4 is 4

let x5 = 3;
const y5 = ++x5;
// x5 is 4; y5 is 4





/**
link to study: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
 */