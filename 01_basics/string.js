const name = "kushal"
const repoCount = "100"

//console.log(name + repoCount); // This is synatx is not good and outdated also and people don't like to see this type of syntax nowdays // Not recommedated by an professionals

console.log(`Helo i am here ${name} what about you all ${repoCount}`) // this is recommedate for string this is known as backticks. The advantage of using backticks is that it comes with string-interpolation. The benefit is that we make placeholders and we can directly inject variables
// to inject variable in backticks we need to use -> ${} for the variable // This is the modern way of syntax which is known as string-interpolation


// Another way to declare string 

const gameName = new String('kushalMee') // While using this new keyword we are using objects of javascript 

console.log(gameName [3]); // Here I am accessing the key of an string which is an alignment of and string's value that starts from 0. In this case the 3 key is 'h'
console.log(gameName.__proto__) // Here we are accessing the prototype with the method '.__proto__'
console.log(gameName.length) // We will get the length of string which we initialized before
console.log(gameName.toUpperCase()) // This is the way to use functions in string. The syntax is -> '.toUpperCase()'
console.log(gameName.charAt(0)) // To see at which index the character is at. therefore, you pass numbers here to get the located character
console.log(gameName.indexOf('u')) // Here you will input the character to get the index number of location.VicaVersa of '.charAt()' // The syntax of this is .indexof('u')

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8, 4) // Here we can assign negative value also
console.log(anotherString)

const newStringOne = "   kushal  "