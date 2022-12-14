const hi=(name)=>{
    console.log(`hello ${name}`)
  }
// here, we are exporting this module func.js using module.exports object to make it available globally
// now, by using require() func we can import this module into our file.
// a file imported inside another file is called a module.
  module.exports=hi

  