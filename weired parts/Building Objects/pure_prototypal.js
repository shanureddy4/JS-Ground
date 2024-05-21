if(!Object.create){
    Object.create = function (o){
        if(arguments>1) throw "one obj at a time"
        var fn = function (){}
        fn.prototype = o;
        return new fn();
    }
}
var John = {
    firstname:"Default",
    lastname:"Default",
    greet : function(){
        console.log("Hello "+ this.firstname+" "+this.lastname);
    }
}

var newobj = Object.create(John);
newobj.firstname = "shanu"
newobj.lastname = "reddy"
console.log(newobj);
console.log(newobj.firstname);

