function a (){
console.log(e); // undefined
console.log(f) //f is not defined
}
function b(){
    console.log(e); // undefined
    var f="hello insde b";
a();

}
b();
var e = "Hello"
console.log(e) // Hello
