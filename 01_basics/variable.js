const accountId = 214327
let accountEmail = "ouranos.pvt@gmail.com"
var accountPass = "42334234"
accountCity = "Udaipur" /* In Javascript without writing var or let infront of variable we can declare a variable [But this is not recommedate or correct way to do so] (Use mostly let to declare variables) */

let accountState;

/*
Prefer not use var
bacause of issue in block scope and functional scope
*/ 


//accountId = 21
accountEmail = "hellomedia@gmail.com"
accountPass = "314523"
accountCity = "Jaipur"

console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity])