//String's are Most Powerful in any language


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

const newString = gameName.substring(0,4) // We can't assign negative value
console.log(newString)

const anotherString = gameName.slice(-8, 4) // Here we can assign negative value also
console.log(anotherString)

const newStringOne = "   kushal  "
console.log(newStringOne); // Normally it will include start and normal spaces
console.log(newStringOne.trim()); // It will trim _blank spaces

const url = "https://kushalwrites. com"

console.log(url.replace(' ','-')); // To replace wrongly written links in this method we first have to initialize if what will there then we have to write to whom it should be writtened

console.log(url.includes('kushal')); // This method to ask that is there given value available or not

console.log(url.includes('Hello World'));

const gameNamei = new String('kushal-Mee') // Here we are spliting string on basis of spaces
console.log(gameNamei.split('-')); // This is the method // And here we can give seperator or limit at same time and we can give seperator seperatoly
// And it will give array as a output after converting from string