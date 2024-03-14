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