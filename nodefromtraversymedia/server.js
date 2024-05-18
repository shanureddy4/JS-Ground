#!/usr/bin/env node

import http from 'http'

const PORT = process.env.PORT;

const logger = (req,res,next) =>{
    console.log(`${req.method} ${req.url}`)
    next();
}

const server = http.createServer((req,res)=>{
    logger(req,res,()=>{
        if(req.method === 'GET'){
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end('<h1> Hello World </h1>')
        }
        else{
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 400;
            res.end('<h1>only GET supported')
        }

    })
    
})

server.listen(PORT,()=>{
    console.log(`Server is running on Port : ${PORT}`)
})