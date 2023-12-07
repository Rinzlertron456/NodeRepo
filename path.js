const path=require('path');
console.log(path.sep);

const filepath=path.join('/dir','folder','dummy.txt');

console.log(filepath);
console.log(path.basename(filepath));
const absolutepath=path.resolve(__dirname,'/dir','folder','dummy.txt');
console.log(absolutepath);