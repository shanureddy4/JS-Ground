var person={
    Firstname : "Default",
    Lastname : "Default",
    getFullneme: function(){
        return this.Firstname+" "+this.Lastname;
    }
}

var obj = {
    Firstname: "john",
    Lastname: "doe"
}

// this is just for demonstration. Don't ever do it.
// to make it not used in this manner, double underscore is used. 

obj.__proto__ = person;
console.log(obj.getFullneme());

var obj2 = {
    Firstname: "shanu"
}
obj2.__proto__ = person;
console.log(obj2.getFullneme());