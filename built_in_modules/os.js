const  os= require('os')
// for built-in modules, we dont use './' in n side require() method
// when we type "os." we get access to all thec methods and properties this module provides
// os.

//info about current user
const user= os.userInfo()
console.log(user);
// OUTPUT
// {
//     uid: -1,
//     gid: -1,
//     username: 'Challa Nishita',
//     homedir: 'C:\\Users\\Challa Nishita',
//     shell: null
//   }


//method returns the system uptime in seconds
const time=os.uptime();
console.log(time);
//OUTPUT
// 289755

const currentOS ={
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);
//OUTPUT

// {
//     name: 'Windows_NT',
//     release: '10.0.19044',
//     totalMem: 8364810240,
//     freeMem: 1564811264
//   }