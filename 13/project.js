const express = require("express")
const users = require("./MOCK_DATA.json")
const PORT_NUMBER=8000

const app = express()
//browser
app.get("/users/email",(req,res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.email}</li>`).join("")}
    </ul>
    `
    return res.send(html)
})
//api
app.get("/api/users",(req,res)=>{
    return res.json(users)
})
//single user details
app.get("/users/:id",(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)
    const html = `
    <div>Hi, ${user.first_name}</div>
    <ol>
        <li>${user.email}</li>
        <li>${user.gender}</li>
    </ol>
    `
    return res.send(html)
})
//same routes
app.route("/api/users/:id").get((req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)
    return res.json(user)
}).patch((req,res)=>{
      return res.send(`${req.params.id} user updated`)
}).delete((req,res)=>{
    return res.send(`${req.params.id} user deleted`)
})  
 
app.post("/users",(req,res)=>{
    return res.send("New user added")
})

// app.get("/api/users/:id",(req,res)=>{
    
// })
// app.patch("/api/users/:id",(req,res)=>{
  
// })
// app.delete("/api/users/:id",(req,res)=>{
    
// })
app.listen(PORT_NUMBER,()=>{
    console.log(`Server Started at PORT: ${PORT_NUMBER}`)
})

