const {readFileSync, writeFileSync} = require('fs');

//in order to access these files,they have to be in the same folder.
//reading from a file
const first = readFileSync('./first.txt','utf8')
const second = readFileSync('./second.txt','utf8')

console.log(first,second)

//writing to a file

writeFileSync(
    './result.txt',`the written data is:${first}, ${second}`,{flag:'a'}
)