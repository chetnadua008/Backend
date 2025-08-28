// const os = require("os")
const fs = require("fs")
// console.log(os.cpus().length)

//blocking - synchronous task - thread pool
// console.log(1)
// const result = fs.readFileSync("contacts.txt","utf-8");
// console.log(result)
// console.log(2)

console.log(1)
console.log(2)
//non blocking - direct execute
fs.readFile("contacts.txt","utf-8",(err,result)=>{
    console.log(result);
})
console.log(3)

