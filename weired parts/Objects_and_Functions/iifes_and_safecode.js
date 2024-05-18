// (function greet(name){
//     var greetings = "Hello";
//     console.log(greetings+" "+name);
// }('shanu'));

// console.log(greetings);

(function greet(global,name){
    var greetings = "Hello";
    global.greetings = "Hello";
    console.log(greetings+" "+name);
}(window,'shanu'));

console.log(greetings);