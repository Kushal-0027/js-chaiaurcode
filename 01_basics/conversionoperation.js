let score = "27"

// If we write a number like this => let score = 27 {It will return value number} or else if we write number as let score ="27" {Then it will return value as string}

// console.log(typeof score); // written normally
// console.log(typeof (score)); // It is written as a method bcz we have written in () parentheses

let valueInNumber = Number(score)  // If you know that you have to work throughout on number then use this

// NaN => Not a Number
// But the type of NaN is a Number 

// If you want to convert string number into number then use this {Given : let score ="27" [let givenNumber = Number(score)]} It is now converted into number 


// case 2
// If you given let score = "27abc" and now you have to convert into this number {The problem here is that it will convert abc also with 27 and abc is not a number So to check it. We have to go through a exercise >> }

//let sscore = "28abc" // Here we declare a number with abc

//let numberCheck = Number(sscore) // Here we converted string into a number that was 28abc
// But the problem is this will convert abc also in number

// console.log(typeof numberCheck); // checking the number
//console.log(numberCheck); // looking what is actually going into this 28abc senerio // In this scenerio it is returing NaN which also an special type 

// So please don't relay on numbers in Javascript too much


// case 3 
// If i put <null> instead of 28abc ! Guess what it will return 
// null will return me value '0'

// case 4 
// Here i will replace null to undefined 
// Interestingly it will return me a value NaN after doing whole process again

// case 5 
// If we write boolean value true/false
// It will return me a 1/0 value 

//case 6 
// If you are trying to convert string then 
// We will get NaN

// In  you want to convert boolean true/false into number obviosuly we have Boolean also

let loggedIn = 1

let BooleanLoggedIn = Boolean(loggedIn)
// console.log(BooleanLoggedIn); 

// In this case we got true after entering 1; Similarly we got false after entering 0
// We get false while we just written string "" 
// We get true after we enetered a name in string "Hello" 

let someNumber = 33 // Converting it into String

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);