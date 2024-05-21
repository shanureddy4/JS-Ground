var a = 3;
console.log(typeof a); // number

var b = "Hello"
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // object not so useful
console.log(Object.prototype.toString.call(d)); // [object Array] useful. see in oneNote
function Person(name){
    this.name = name;
}

var e = new Person('Jane'); 
console.log(typeof e) // object.
console.log(e instanceof Person); // true
console.log(typeof Person)// function (function itself is a type)


console.log(typeof undefined); // undefined
console.log(typeof null); // object
// above is a bug, since many framework uses this
// they did not resolve it.