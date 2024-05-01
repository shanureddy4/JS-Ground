//import fs, { readFileSync } from 'fs';
 import fs from 'fs/promises'

//asynchronous way
// fs.readFile('src/textfile.txt','utf-8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

//synchronous way
// const data = fs.readFileSync('src/textfile.txt','utf-8');
// console.log(data);

//with promises
// fs.readFile('src/textfile.txt','utf8')
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err))


//with async await. 
const getData = async ()=>{
    try{
        const data = await fs.readFile('src/textfile.txt','utf-8');
        console.log(data);
    }catch(err){
        console.log(err);
    }
} 

const writeData = async () => {
    try{
        await fs.writeFile('./src/textfile.txt','Writing hello world to this file...');
        console.log("writing in progress");

    }catch(err){
        console.log(err)
    }
}
const appendSomething = async () =>{
    try{
        await fs.appendFile('./src/textfile.txt','\nappending to this file');
    }catch(err){
        console.log(err);
    }
}
writeData();
appendSomething();
getData();