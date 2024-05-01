import express from 'express';
const app = express();
// this is middleware. ref server.js for more insights. 
app.use((req,res,next)=>{
    console.log(req.method);
    next();
}) 

app.get('/',(req,res)=>{
    res.type('application/json');
    res.send(JSON.stringify("Hello, world"));
})

app.listen(8000,()=>{
    console.log("listening on port 8000");
})