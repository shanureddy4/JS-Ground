// array can hold anything.
// typical array
var ar = new Array();

// array literal
var arr = [];
arr = [1,false,{
    name:'shanu'
},
(name)=>{
    console.log('Hello '+name)
}
]

//observe here, we are calling a function inside the array.
console.log(arr[3](arr[2].name));