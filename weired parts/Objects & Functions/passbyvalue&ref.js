// pass by value 
var a = 10;
var b = a;
b=5;
console.log(a);
console.log(b);

// pass by reference
var c = {greetins:"Hello"}
var d = c;

c.greetins = "Hola"
console.log(c);
console.log(d);
function mutate(obj){
obj.greetins = "Hello again"
}
mutate(c);
console.log(c);
console.log(d);