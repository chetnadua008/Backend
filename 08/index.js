const http = require("http")
const url = require("url")
const server = http.createServer((req,res)=>{
    const urll = url.parse(req.url,true)
    console.log(urll)
    res.end(`Hi ${urll.query.username}`)
})
server.listen(8000)