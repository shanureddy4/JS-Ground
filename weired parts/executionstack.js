function a (){
console.log(e); // undefined
console.log(f) //f is not defined
}
function b(){
    console.log(e); // undefined
    var f="hello insde b";
a();

}
//b();
var e = "Hello"
//console.log(e) // Hello


// variable environment
function testa(){
    var myVar;
    console.log(myVar);
}
function testb(){
var myVar = 10;
console.log(myVar);
testa();
}
var myVar = 20;
console.log(myVar);
testb();