var greet = "Hello";
var greet = "Hola"

console.log(greet); // prints Hola
// this is because, as you recall, all js files are interpreted as single file
// so above second greet will print first. 

var english = {greet:"Hello"}
var spanish = {greet:"Hola"}

console.log(english.greet); // see how objects (name spaces) are used to distinguish

english.greetings.greet = "Hello again" // throws error , cuz as you see the precedence table, period (.)
// has left to right. here greetings is not defined but used. so we will get error. 
