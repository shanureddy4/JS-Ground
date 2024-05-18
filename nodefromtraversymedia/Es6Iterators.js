//filter
//find
//map
//forEach
//every and some

//reduce
// say you have an array of elements, you want to make total of the array. 
// you can make use of reduce
// here acc -> accumulator , it just a previous state, current is current element in an array.
let a = [1,4,5,6,21];
let b = a.reduce((acc,current)=>{
    return acc += current;
},0)

console.log(b);

