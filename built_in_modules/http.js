const http=require('http')

//both the parameters are objects.
//1st par - incoming request (info abt method and all other useful info)
//2nd par - response we send back
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to my homepage folks')
    }
     
    else{
    res.end(
        `<h1>Oops!</h1>
        <p> We cant seem to find the page u r looking for </p>
        <a href="/" > back home</a>
        `
    )
    }
})
// telling our server to listen to taht respective port no(5000 in this case)
server.listen(5000)
//the terminal wont exit as the response is shown in the browser in localhost 5000