const score = 400 // This explicity way to declare as a number
console.log(score) // In output it is automatically defined that it is a number type

const total = new Number(100) // Here i am forcefully creating Number
console.log(total) // Whenever we specially declare number for a variable then in output it specially casted and showed that it's a number

console.log(total.toString().length); // We can convert number to a string also and obviously it's type-off while also change and also to see the length of the given number we can write as a     .length to see how much value it contain
console.log(total.toFixed(2)) // We use .toFixed because if we want to perform multiple,addition,substraction then we should have precison init This type of thing mostly used in large and big sites Eg:E-commerce etc. // 100.00

const otherNumber = 23.89336

console.log(otherNumber.toPrecision) // this property .toPrecision() is used to get precised value let's say we have value = 23.89336 and we want precise value 3 then it will return 23.9 and we have value 123.83904 then it will return 124. | And same time i give value like 1123.573 and i ask it to give me (3) precise value then it will give me 1.12e+3 this is exponential precise value // This property returns the value string // Use this precision value method carefully bcz it have automatic string convert & exponential value....

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // This .toLocaleString() method will give us a values based on US standards in this case we given 1000000 and this method converted into 1,000,000 // and i like Indian values ;) But i love money in dollars ☠
console.log(hundreds.toLocaleString('en-IN')); // to see value in Indian value terms then we have to give 'en-IN' to get indian value in return

/*For DSA and CP public */
// We know that Number is the datatype we have
// To get max value in JS for number -> Number.MAX_VALUE / .MIN_VALUE / .MAX_SAFE_INTEGER


// +++++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++++++

// We get maths library byDefault in javascript