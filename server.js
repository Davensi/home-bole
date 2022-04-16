const express = require('express');
const path = require('path');
const fs = require('fs');
const { log } = require('console');
const app = express();

// 托管静态 资源 
app.use('/static', express.static('static/'));

app.get('/',(req,res)=>{
    console.log('奇怪了');
res.sendFile(path.join(__dirname,'/index.html'))
})
app.get('/cate',(req,res)=>{
    console.log(req.query.id);
res.sendFile(path.join(__dirname,'/cate.html'))
})
app.get('/detail',(req,res)=>{
    console.log(req.query.id);
res.sendFile(path.join(__dirname,'/detail.html'))
})

app.listen(3000,()=>{
    log('server is 6000')
})