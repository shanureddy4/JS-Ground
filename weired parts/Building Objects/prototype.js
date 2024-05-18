function person(firstname,lastname){
    this.firstname = firstname
    this.lastname = lastname
    this.something = function(){
        console.log("executes something");
    }
}
person.prototype.greet = function(){
    console.log(firstname+" "+lastname);
}
var shanu = new person("shanu","reddy");
