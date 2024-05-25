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
console.log(stringNumber);
console.log(typeof stringNumber);