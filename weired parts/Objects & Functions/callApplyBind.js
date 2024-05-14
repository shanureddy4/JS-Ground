var person = {
    firstname: "Shanu",
    lastname: "Reddy",
    greet: function(){
        var fullname = this.firstname+" "+this.lastname;
        return fullname;
    }
}
//bind
var logged = function(lang1,lang2){
    console.log(lang1+" "+lang2+" "+this.greet())
}.bind(person,"en","es")
// var loggedBind = logged.bind(person,"en","es");

// loggedBind("tn","tl");
logged();

// call
var callLogged = function(lang1,lang2){
    console.log(lang1+" "+lang2+" "+this.greet());
}

callLogged.call(person,"en","es");

//apply

var applyLogged = function(lang1,lang2){
    console.log(lang1+" "+lang2+" "+this.greet());
}

applyLogged.apply(person,["en","es"]);


// function borrowing. 
var obj = {
    firstname: "Tirumal",
    lastname: "Yadav",
}

console.log(person.greet.apply(obj));

// function currying
var multiplyFun = function(a,b){
    console.log(a*b);
}
var multiplyByTwo = multiplyFun.bind(this,2);
var alwaysGive10 = multiplyFun.bind(this,5,2);

multiplyByTwo(3); //outputs 6

alwaysGive10(4,5); //even if i pass args it outputs 10.

//this is how they interpreted
function multiplyByTwo(a,b){
    a = 2;
    console.log(a*b);
}
function multiplyByTwo(a,b){
    a = 5;
    b = 2;
    console.log(a*b);
}