const os = require('os');
const user=os.userInfo();
console.log(`System UpTime is: ${os.uptime} seconds`);
const osInfo={
    name:os.hostname(),
    user:user,
    type:os.type(),
    version:os.release(),
    platform:os.platform(),
    freememory:os.freemem(),
    totalmemory:os.totalmem(),
    CpuInfo:os.cpus(),
    architecture:os.arch(),
    HomeDirectory:os.homedir(),
}
const display=()=>{
    console.log(osInfo);
}

display()