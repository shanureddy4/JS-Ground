// there is a difference between JS object and JSON
// all JSON object can be a JS literal but inverse is not true. 
// to convert a object literal to string and vise versa we can use these. 
var JSONThing = { // JS will accept this also. This is strigify version of object literal.
    "fistname": "Shanu",
    "lastname":"reddy"
}
console.log(JSONThing);
var objectLiteral = { // this is object literal which JS will typically uses. But this cannot be used in the JSON
    firstname: "Shantha",
    lastname:"reddy"
}
console.log(objectLiteral);

console.log(JSON.parse('{"firstname":"shanu"}')); // notice we have used single quote along with double quote.
console.log(JSON.stringify(objectLiteral));