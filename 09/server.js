const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    const url = req.url;
    const requestMethod = req.method;
    fs.appendFile("log.txt",`${Date.now()} ${url} ${requestMethod}\n`,()=>{
            switch(url){
        case '/':
            if(requestMethod==='GET'){
                res.end("Welcome to homepage")
            }
            else if(requestMethod==='POST'){
                res.end("Form submitted")
            }
        break;
        case '/about':
            if(requestMethod==='GET'){
                res.end("My name is Chetna Dua")
            }
            else if(requestMethod==='POST'){
                res.end("Applied successfully")
            }
        break;
        case '/contact':
            if(requestMethod==='GET'){
                res.end("Contact us at: 9896621288")
            }
            else if(requestMethod==='POST'){
                res.end("POST")
            }
        break;
        case '/signup':
            if(requestMethod==='GET'){
                res.end("FORM TO SIGN UP");
            }
            else if(requestMethod==='POST'){
                res.end("SIGNUP SUCCESSFUL")
            }
            
    }
    })

})
server.listen(8000)