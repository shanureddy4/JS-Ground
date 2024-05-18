var person={
    Firstname : "Default",
    Lastname : "Default",
    getFullneme: function(){
        return this.Firstname+" "+this.Lastname;
    }
}

var John = {
    Firstname: "john",
    Lastname: "doe"
}

John.__proto__ = person;
for(var prop in John){
    //if(John.hasOwnProperty(prop))
    //console.log(prop+": "+John[prop]);
}

_.extend(John,person);
console.log(John);
// var extend = createSomething(allKeys);

// function createSomething(keyfun){
//     console.log("inside createsomthing")
//     return function(obj){
//         console.log("Executed inside anynymous")
//         return obj
//     }
// }

// function allKeys(obj){
//     console.log('inside all keys');
// }
// console.log(extend("shanu"));