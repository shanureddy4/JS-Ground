// function greet(whatsoever){
//     return function greetings(name){
//         console.log(whatsoever+" "+name);
//     }
// }
// var hello = greet('hi');
// hello("shanu");

// or u can do this
// greet('hi')('shanu');

// var greeter = function (whatsoever){
//     return function greetings(name){
//         console.log(whatsoever+" "+name);
//     }
// }

// greeter('Hi')('shanu')

// part 2 of clousers
function buildFunctions(){
    var arr = [];
    for(var i=0;i<3;i++){
        arr.push(
            function fun(){
                console.log(i);
            }
        );
    }
    return arr;
}
var funs = buildFunctions();
funs[0]();
funs[1]();
funs[2]();

// using es6
function buildFunctions2(){
    var arr = [];
    for(var i=0;i<3;i++){
        let b=i;
        arr.push(
            function fun(){
                console.log(b);
            }
        );
    }
    return arr;
}
var funs2 = buildFunctions2();
funs2[0]();
funs2[1]();
funs2[2]();

//using with es5
function buildFunctions2(){
    var arr = [];
    for(var i=0;i<3;i++){
        arr.push(
            (
            function fun(value){
                return function funs2(){
                    console.log(value)
                }
            }(i) )
        );
    }
    return arr;
}
var funs2 = buildFunctions2();
funs2[0]();
funs2[1]();
funs2[2]();

