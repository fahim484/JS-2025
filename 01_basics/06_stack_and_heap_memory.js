// There are two types of memories,
// 1. Stack (Primitive) <--- Copy Value
// 2. Heap (Non-primitive/Reference) <--- Original Value



// Stack:
let myYoutubeName = "fahimdotcom"

let anotherName = myYoutubeName

anotherName = "moneyorcode"

console.log(myYoutubeName);
console.log(anotherName);




// Heap:
let userOne = {
    email: "user@google.com",
    upi  : "user@ybl"
}

let userTwo = userOne

userTwo.email = "fahim@google.com"

console.log(userOne.email);
console.log(userTwo.email);