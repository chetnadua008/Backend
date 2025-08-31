const express = require("express")
const app = express()
app.get('/',(req,res)=>{
    res.send(`Hello ${req.query.username} from homepage`)
})
app.get('/about',(req,res)=>{
    res.send("This is Chetna, about page")
})
app.get('/contactus',(req,res)=>{
    res.send("contact at 9896621288")
})
app.post('/',(req,res)=>{
    res.send("post request at homepage")
})
app.listen(8000)

// const url = require("url")
// // const express = require("express")
// // const app = express()
// function requestHandler(req,res){
    
//     const myUrl = url.parse(req.url,true);
//     const requestMethod = req.method;
   
    
//         switch(myUrl.pathname){
//         case '/':
//             if(requestMethod==='GET'){
//                 res.end("Welcome to homepage")
//             }
//             else if(requestMethod==='POST'){
//                 res.end("Form submitted")
//             }
//         break;
//         case '/about':
//             if(requestMethod==='GET'){
//                 // console.log(myUrl.query.username)
//                 const username = myUrl.query.username;
//                 res.end(`Hi ${username}`)
//             }
//             else if(requestMethod==='POST'){
//                 res.end("Applied successfully")
//             }
//         break;
//         case '/contact':
//             if(requestMethod==='GET'){
//                 res.end("Contact us at: 9896621288")
//             }
//             else if(requestMethod==='POST'){
//                 res.end("POST")
//             }
//         break;
//         case '/signup':
//             if(requestMethod==='GET'){
//                 res.end("FORM TO SIGN UP");
//             }
//             else if(requestMethod==='POST'){
//                 res.end("SIGNUP SUCCESSFUL")
            
//         break;
            
//         }
//     }
// }

// const server = http.createServer(requestHandler)
// server.listen(8000)