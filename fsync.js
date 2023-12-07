const fs=require('fs');
// const path=require('path');
// const first=readFileSync('./dir/folder/dummy.txt','utf-8');
// console.log(first);
// const file1=readFileSync('./file1.js','utf-8');
// console.log(file1);
// const textout=`\nTime is ${Date.UTC}`;
// writeFileSync('./dir/folder/time.txt',textout);
// console.log('File written');
fs.readFile('./dir/folder/time.txt','utf-8',(err,data1)=>{
    if(err) return console.log("Error");
    console.log(data1);
    fs.readFile('./dir/folder/dummy.txt','utf-8',(err,data2)=>{
        if(err) return console.log("Error");
        console.log(data2);
        fs.writeFile('./dir/folder/final.txt',`${data1}\n${data2}\nGo, get a life.`,'utf-8',err=>{
            if(err) return console.log("Error");
            console.log('Data written. Go, get a life.');
        })
    })
})