//you may have used setTimeout function 
// that mean you indirectly used clousers
function timeToGreet(name){
    setTimeout(function(){
        console.log(name)
    },3000)

    console.log('functions EC is terminated');
}
// as you observe though the function is terminated , the fuction still
// has name variable.
timeToGreet("shanu");

function callBackTest(callback){
    var a = 10; // some work is done
    var b = 20; //// some work is done
    callback();
}
callBackTest(function(){
    console.log("callback finished");
});
