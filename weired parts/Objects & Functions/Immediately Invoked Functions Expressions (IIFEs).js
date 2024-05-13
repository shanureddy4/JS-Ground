// function statement
// function greet(name){
//     console.log("Hello "+ name);
// }

// greet('shanu')

// function exression

// var greetings = function (name){
//     return "Hello "+ name
// }

// console.log(greetings)
// console.log(greetings('shanu'))


var greetings = function (name){
    return "Hello "+ name
}('shanu');

console.log(greetings)
//console.log(greetings('shanu'))



// expression need not to be assign to a identifier.
// it can be left out something like this.

3;
3+4;
{name:"shanu"}

//from above, you know that it is a function expression not a function statement.
// why it is showing an error here ? ref oneNote
// function (name){
//     return "Hello "+ name
// }

// how to use funciton expression with IIFE.
// as you know that () -> this is treated as function expression.
(3+4);
// so you can wrap your function expression inside the () so that the syntax parser will see
// () and assumes it as a function expression

(function(name){
    console.log("Hello "+name)
}('shanu')
);

// there are some other ways in which we can bluff syntax parser to treat our function as an expresson.
// but above one is in use since it is easy to read. you can consider below as well.
// and recent frameworks tend to above kind of notation.

(function (name) { // Semicolon added
    console.log("Hello " + name);
  })('shanu');