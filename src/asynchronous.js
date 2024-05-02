// callbacks are nothing to do with asynchronous
// Here we wrote a simple callback hell. 
// const getData = (arg1,callback)=>{
//     console.log(arg1);
//     callback();
// }
// getData("shanu",()=>{
//     console.log("first callback");
//     getData("reddy", ()=>{
//         console.log("second callback");
//     })
// })

//now we will see how that can be solved with promises.
// const callmeForData = (arg1)=>{
//     return new Promise((resolve,reject)=>{
//         if(typeof arg1 === 'string') resolve(console.log(arg1));
//         else reject(new Error("please be a string"));
//     })
// }
// callmeForData("shanu")
//     .then((res)=>{
//         console.log("first callback");
//         return callmeForData("reddy")
//     })
//     .then(()=>{console.log("second callback")})
//     .catch((err)=>console.log(err))


//now we will see how this can be more readable using async and await. 
// remember that async and await will always return a promise. 
const callForData = async (arg1) => {
    if (typeof arg1 === 'string') {
        console.log(arg1);
        return; // Resolve the promise if the argument is of type "string"
    } else {
        throw new Error('Invalid argument type'); // Reject the promise otherwise
    }
};

const runAsyncFunctions = async () => {
    try {
        await callForData("shanu");
        console.log("first callback");
        await callForData("reddy");
        console.log("second callback");
    } catch (err) {
        console.log(err);
    }
};

//runAsyncFunctions();
//or 
runAsyncFunctions().then(()=> console.log('all promises are resolved.'))