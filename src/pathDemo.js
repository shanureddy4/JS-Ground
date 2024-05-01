import path from 'path';
// here we can give dummy directory . we are just performing some functions on it. 
let filePath = "dir1/dir2/test.txt";

console.log("dirname : ",path.dirname(filePath));
console.log("base name : ",path.basename(filePath));
console.log("extension : ",path.extname(filePath));
console.log("parse : ",path.parse(filePath));

//below two operations are imp, since directory is differ from os to os, it concates file
//path acc to the os
console.log(path.join("join : ",filePath,"dir3","dir4"));
console.log(path.resolve("resolve : ",filePath,"dir3","dir4"));
