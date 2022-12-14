const fs=require('fs') 

//reading from the file
fs.readFile('./first.txt', 'utf8',(error,data) => {
if(error){
        console.log(error)
        return
    }
    console.log(data.toString())
})
//writing from the file
fs.writeFile('./res_async.txt',`Here is the result of writeFile ops` ,(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("data is written into the res_asyn file");
    }
})