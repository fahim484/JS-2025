const name = "Fahim"
const repoCount = 50


// Outdated:
console.log(name + repoCount + " Value"); // concatenate(Concatenation)

// Modern:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //backtick (String interpolation) use this 


// String Declare:
const gameName = new String('fahim-ff-com')

console.log(gameName[0]); // Key : Value pair access
console.log(gameName.__proto__); // object find method


// String Method:
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)
const anotherString2 = gameName.slice(-7, 4)
console.log(anotherString);
console.log(anotherString2);


const newStringOne = "   fahim   "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove spaces


const url = "https://fahim.com/fahim%20faysal"

console.log(url.replace('%20', '-'))

console.log(url.includes('fahim'))
console.log(url.includes('sundar'))


console.log(gameName.split('-'));