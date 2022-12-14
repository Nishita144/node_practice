//there is no global window object in NodeJs through which we can accsess almost everything on the browser like in javascript as there is no browser in NodeJs
//__dirname - path to current directory
// __filename - file name
// require   - func to use modules(CommonJs)
// module    -  info abt curr module(file)
// process   -  info abt env where the prog is being executed
console.log(require)
setInterval(()=>{
    console.log('hello');
},1000)
//press ctrl + c to stop