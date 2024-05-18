function person(firstname,lastname){
    console.log("this keyword: ",this)
    this.firstname = firstname
    this.lastname = lastname
    console.log("function is invoked.");
    //return {greeting:"shanu"}
}

var Shanu = new person("shanu","reddy");
var Sudha = new person("sudha","Naidu")
console.log(Shanu);
console.log(Sudha);