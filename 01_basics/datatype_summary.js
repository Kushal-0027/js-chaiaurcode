// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.



// Primitive Datatypes :- They are Call by Value [The original data is not given to you. It copy and serves you (The changes we make are made in copy's)]
// Types -> There are 7 types :
// String, Number, Boolean, null, undefined, Symbol(It is used to make any value unique [specially in advance java frontend development]), BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail; // undefined

const id = Symbol('123') // In return we get another datatype which we known as symbol
const anotherId = Symbol('123') // If you are assuming that the above symbol and this symbol is same then you are totally wrong // The work of symbol is that only if you pass similar datatypes with same name but after then also there value will not be same
console.log(id === anotherId) // the proof is here that both of above symbol is different despite they have same things init

const bigNumber = 423423424252333n // If we will take this much or more bigger number in container then javascript will automatically take bigInt to get them // And if we put n after the such big number then it will become bigInt 


// Non-Primitve / Reference Datatype 
// Types ->
// Array, Objects, Functions

const hero = ["shaktiman", "spiderman", "shifuji"] // Here we have declared array's

// we write or declare objects in {} braces
// If you want then you can store objects in variable also // datatype in this can be anything function, boolean, string... and interstingly it can be another object also
let myObj = {
    name: "kushal",
    age: 19
}

// There are many ways to declare functions in js // Now we are looking to declare the function will treating it as in variable
// If we look forward to datatype for function then the typeof will return function as datatype. But it is called as object function
const myFunction = function() {
    console.log("Hello World");
}

// Here we are seeing how to find and know the datatype of any value or variable
console.log(typeof bigNumber);


// -> Click on link below to see what will typeof operator return the value for a particular datatype
// https://262.ecma-international.org/5.1/#sec-11.4.3


/*****************************************  MEMORY  ******************************************************/

// We have two types of memory 
// Stack and Heap Memory

// Stack -> In Primitive Datatype stack memory is used // In Stack memory at the time of changing value we get copy / duplicate of it

let getEmail = "kushalhellodotgmailcom"

let anotherEmail = getEmail
anotherEmail = "helloerarwedot"

console.log(getEmail)
console.log(anotherEmail)

// Advance Datatype
let userOne = {
    email: "kushal@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dreams@me.com" // We are accessing an object for an email btw this is the way to access the already existing information and the information is that we have assigned the email in userOne and accessed it through userTwo and after that we are initialising changes in the email which is already existing in userTwo

console.log(userOne.email)
console.log(userTwo.email) // Exactly i am also thinking that the email of second one will be changed but bro it's a heap and we get result of both email is same and that is dreams@me.com 
// This second email changes also affected to first email and both results are what we have change in second email.



// Heap -> In Reference / Non-Primitive Datatype Heap memory is used // In Heap memory at the time of changing value we get original / refernce of it
 
// Heap example is from 66 row 