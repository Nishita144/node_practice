const path=require('path')
console.log(path.sep);
//OUTPUT
// \
// Lets us assume that we created a text folder inside  a sub-folder of a folder
// content -> subfolder ->text.txt
//The above said path can be printed as shown

// const filepath=path.join('/content', 'subfolder', 'text.txt')
// Output of console.log is
// /content/subfolder/text.txt

path.basename(filename)
//gives file inside subfolder
path.resolve(__dirname, 'content','subfolder','text.txt')
//gives the entire path 