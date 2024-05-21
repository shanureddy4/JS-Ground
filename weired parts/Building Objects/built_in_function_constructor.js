String.prototype.isLenghtGreater = function(limit){
    return this.length > limit;
}
var a = "John";
console.log(a.isLenghtGreater(3));
