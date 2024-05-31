// Basic Comparison:
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// *** Whenever you compare any values, make sure that the DataType of both of them is the same.
// console.log("2" > 1);
// console.log("02" > 1);


// ? Avoid this type of code:
console.log(null > 0); // null = 0 (0 > 0)--> false (Value Conversion)
console.log(null == 0); // equality operator (Value Conversion)
console.log(null >= 0); // null = 0 (0 >= 0)--> true (Value Conversion)

/**
The reason is that an equality check and comparisons > <
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null 0 is true and (1) null > 0 is false.
 */



// ? Avoid this type of code:
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false





// TODO: In JavaScript two things are there, One is Comparison(>, <, >=, <=, !=) and another is equality check(==, ===). These are different things in JS.


// Strict Check(===):
console.log("2" === 2); // false // Check both value DataTypes(In Strict Check Value Conversion not working)
