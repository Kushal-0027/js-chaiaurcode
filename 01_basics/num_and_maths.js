const score = 400 // This explicity way to declare as a number
console.log(score) // In output it is automatically defined that it is a number type

const total = new Number(100) // Here i am forcefully creating Number
console.log(total) // Whenever we specially declare number for a variable then in output it specially casted and showed that it's a number

console.log(total.toString().length); // We can convert number to a string also and obviously it's type-off while also change and also to see the length of the given number we can write as a     .length to see how much value it contain
console.log(total.toFixed(2)) // We use .toFixed because if we want to perform multiple,addition,substraction then we should have precison init This type of thing mostly used in large and big sites Eg:E-commerce etc.