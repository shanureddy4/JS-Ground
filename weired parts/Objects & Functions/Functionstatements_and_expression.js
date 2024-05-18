// function expression
a=3;
1+3;

//function statements;
if(a===3){console.log("prints a value "+a)}
// but assigning above stattement to a variable is kind of useless.
//var a = if(a===3){console.log("prints a value "+a)} // uncomment it to see the error.

// now we will see functions (Expression and Statement)

greet();
function greet(){
    console.log("greeted");
}
var ananymousGreet = function(){
    console.log("executed inside the ananymous function.")
}
ananymousGreet();

// function log(a){
//     console.log(a);
// }
// log(a="shanu")
// log({name:"shanu",age:"50"})

function log(a){
    a();
}
log(function(){console.log("self prints")})

