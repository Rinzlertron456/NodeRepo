const http=require('http');
const {createReadStream} = require('fs');
const fs=require('fs');
const util=require('util');
const readPromise=util.promisify(fs.readFile);
const writePromise=util.promisify(fs.writeFile);
const url=require('url');
const { resolve } = require('path');
const { reject, result } = require('lodash');
const data=fs.readFileSync(`${__dirname}/dir/folder/data.json`,'utf-8');
const dataobj=JSON.parse(data);
const EventEmitter=require('events')
// const getPath=(path)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,'utf8',(err,data)=>{
//             if(err) reject(err);
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// getPath('./dir/folder/data.json').then((result)=>console.log(result)).catch((err)=>console.log(err))

//Async Promises
const start=async()=>{
    try{
        const dataprint=await readPromise('./dir/folder/data.json');
        const file1=await readPromise('./file1.js');
        await writePromise('./dir/folder/writepromisedata.txt',`Hey Guys. No promises kept. Sorry!! :) ${dataprint} ${file1}`,{flag:'a'})
        console.log(dataprint, file1);
    }
    catch(error){
        console.log(error);
    }
}

start();

//EventEmitter
const CustomEmit=new EventEmitter();

CustomEmit.on('response',()=>{
    console.log('Response 1 Received');
})
CustomEmit.on('resp',(user,id)=>{
    console.log(`Response 2 Received. User: ${user}, ID: ${id}`);
})
CustomEmit.emit('response')
CustomEmit.emit('resp','Santhosh',45);
//Create HTTP Server
const server=http.createServer((req,res)=>{
    console.log(req.url);
    const path=req.url;
    if(path==='/'||path==='/overview'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end('<h1>Greetings Programs</h1>')
    }
    else if(path==='/product'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end('<h1>This is Product</h1>');
    }
    else if(path==='/data'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data);
    }
    else{
        res.writeHead(404,{
            'my-header':'hello howdies!',
            'Content-type':'text/html'
        });
        res.end('<h1>Page not found</h1>');

    }
    }
)
//streams
const stream=createReadStream('./dir/folder/writepromisedata.txt',{
    highWaterMark:9000,
    encoding:'utf8',
})
stream.on('data',(result)=>{
    console.log('Read Stream Data:-\n');
    console.log(data);
})
stream.on('error',(error)=>{
    console.log(error);
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('Server listening on port 3000');
});