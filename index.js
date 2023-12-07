const http=require('http');
const url=require('url');
const fs=require('fs');
const data=fs.readFileSync(`${__dirname}/dir/folder/data.json`,'utf-8');
const dataobj=JSON.parse(data);
const server=http.createServer((req,res)=>{
    console.log(req.url);
    const path=req.url;
    if(path==='/'||path==='/overview'){
        res.end('Greetings Programs');
    }
    else if(path==='/product'){
        res.end('This is Product');
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
server.listen(3000,'127.0.0.1',()=>{
    console.log('Hello Welcome');
});