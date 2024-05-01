#!/usr/bin/env node

import http from 'http'

const PORT = process.env.PORT;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1> Hello World </h1>')
})

server.listen(PORT,()=>{
    console.log(`Server is running on Port : ${PORT}`)
})