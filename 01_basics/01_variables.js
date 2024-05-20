const accountId = 144553;
let accountEamil = "fahim@google.com";
var accountPassword = "12345";
accountCity = "Rajshahi";
let accountState;

// accountId = 2; // not allowed

// scope ---> {}

accountEamil = "fm@fm.com";
accountPassword = "21212121";
accountCity = "Dhaka";

console.log(accountId);

// console: table() static method:
console.table([
  accountId,
  accountEamil,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
