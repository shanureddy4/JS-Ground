function a(){
    console.log(this); // prints window (browser)
    this.name="shanu"
}
function b(){
    console.log(this.name)// prints shanu. mean both refers to the global object which is window.
}
a();
b();

// below this refers to the obj it self for 'this'
// var obj = {
//     name:"Shanmukh",
//     fun: function(){
//         this.name = "updated shanmukh"
//     }
// }
// obj.fun();
// console.log(obj.name);

// inner function refers this as with global object. 
// var obj = {
//     name:"Shanmukh",
//     fun: function(){
//         this.name = "updated shanmukh"
        
//         function setName(namehere){
//             this.name = namehere;
//         }
//         setName("updated again with shanu");
//     }
// }
// obj.fun();
// console.log(obj.name);
// console.log(name);
//with pattern self
var obj = {
    name:"Shanmukh",
    fun: function(){
        var self = this
        self.name = "updated shanmukh"
        
        function setName(namehere){
            self.name = namehere;
        }
        setName("updated again with shanu");
    }
}
obj.fun();
console.log(obj.name);
console.log(name);