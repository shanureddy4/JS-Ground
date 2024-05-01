import fs, { readFileSync } from 'fs';
// import fs from 'fs/promises'

//asynchronous way
fs.readFile('src/textfile.txt','utf-8', (err,data)=>{
    if(err) throw err;
    console.log(data);
})

//synchronous way
const data = fs.readFileSync('src/textfile.txt','utf-8');
console.log(data);

//with promises
// fs.readFile('src/textfile.txt','utf8')
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err))


//with async await. 
const getData = async ()=>{
    try{
        const data = fs.readFileSync('src/textfile.txt','utf-8');
        console.log(data);
    }catch(err){
        console.log(err);
    }
} 
getData();