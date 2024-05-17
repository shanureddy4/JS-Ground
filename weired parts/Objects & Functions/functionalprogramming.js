// since JS functions are first class citizans,
// we can pass functions as params. 

function mapForEach(arr,fn){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

arr1=[1,2,3];

var multiplyTwo = mapForEach(arr1,function(item){
    return item*2;
})

console.log(multiplyTwo);

// continuing to above, we can do many things
// try to understand below one on your self. 
function checkPastLimit(limiter,item){
    return item > limiter;
}
// so here for mapForEach we can only pass function, but our function has two params. so we are
// hardcodig 1 as limiter. remember binding ?
var booleanAr = mapForEach(arr1,checkPastLimit.bind(this,1));
console.log(booleanAr);

// what if you don't want to use bind ?
// here we are binding soon after function it self. 
function checkPastLimitSimplified(limiter){
    //limiter get hard coded and what ever function call with one param, will taken as item.
    return function(limiter,item){
        return item > limiter;
    }.bind(this,limiter);
}
// passing limiter here. 
var booleanAr1 = mapForEach(arr1,checkPastLimitSimplified(2));
console.log(booleanAr1);