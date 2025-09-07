const express = require("express")
const app = express()
const fs = require('fs')
const PORT = 8000
const users = require("./MOCK_DATA.json")
// const fs = require("fs")
//middleware
app.use(express.urlencoded({extended:false}));

//routes
app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    const log = `\n${req.method} : \n ${JSON.stringify(user)}`
    fs.appendFile('log.txt',log,()=>{
        return res.json(user)
    })
    
}).patch((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    // console.log(req.body);
    user.email = req.body.email;

    const log = `\n${req.method} : \n ${JSON.stringify(user)}`
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        fs.appendFile('log.txt',log,()=>{
            return res.json({
                status: 'success',
                id: id,
            })
        })
    })
}).delete((req,res)=>{
    //delete user with id
    const id = Number(req.params.id);
    const idx = users.findIndex((user)=>user.id===id)
    const log = `\n${req.method} : \n ${JSON.stringify(users[idx])}`
    users.splice(idx,1)

    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        fs.appendFile('log.txt',log,()=>{
            return res.json({
                status: 'success',
                id: id,
            })
        })
    })
    
}).post((req,res)=>{
    //post request
    const body = req.body;
    users.push({...body,id: users[users.length-1].id+1})
    const log = `\n${req.method} : \n ${JSON.stringify(users[users.length-1])}`
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        fs.appendFile('log.txt',log,()=>{
            return res.json({
                status: 'success',
                id: users.length
            })
        })
    })  
})
app.get('/users',(req,res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`
    console.log(html)
    return res.send(html);
})
app.get('/api/users',(req,res)=>{
    return res.json(users);
})
app.listen(PORT)