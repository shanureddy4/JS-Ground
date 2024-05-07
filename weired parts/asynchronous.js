function waitSometime(){
var ms = 3000 + new Date().getTime();
while(new Date()< ms){

}
console.log("finished waiting");
}
var myVar= 10
function clickHandler(){
console.log("clicked something in the browser");
console.log(myVar);
}

document.addEventListener('click',clickHandler);
waitSometime();
console.log("execution finished");