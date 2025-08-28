//SERVER

const http = require("http")
const fs = require("fs")
const myServer = http.createServer((req,res)=>{
    const log =`${Date.now()} New req Received\n`
    fs.appendFile('log.txt',log,()=>{
        res.end("Hello from server, How are you doing today?")//append,response
    })    
    // console.log(req.headers)
}) //webserver
myServer.listen(8000,()=>console.log("Server Started"))
//localhost:8000



