const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    //request handler
    const log = `${Date.now()}: ${req.url}\n`
    fs.appendFile("log.txt",log,()=>{
        switch(req.url){
            case '/':
                res.end("Welcome to my server")
            break;
            case '/about':
                res.end("Hi I am Chetna Dua. Welcome to my server")
            break;
            case '/contact':
                res.end("Hi my contact number is : 9896621288")
            break;
            case '/info':
                res.end("My birthdate is 10102002")
            break;
            default:
                res.end("ERROR 404, page not found")
                
        }
    })
})
server.listen(8000)