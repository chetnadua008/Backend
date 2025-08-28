const fs = require("fs");
// fs.writeFileSync('test.txt','hi i am chetna dua')
// fs.writeFile('test.txt','hi this is guruji',()=>{console.log("Written to file")})

// const res = fs.readFileSync('rollno.txt',"utf-8")
// console.log(res)

// fs.readFile('rollno.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("The error is: "+err)
//     }
//     else{
//         console.log("The data is: "+data)
//     }
// })

// fs.writeFileSync('rollno.txt','chetna dua:20524026\npurva dua:205126098')
// fs.writeFile('rollno.txt','chetna dua:20524026\npurva dua:205126098',()=>console.log("File writing finished"))
// console.log("End of main program")

// for(let i=0;i<5;i++){
//     fs.appendFileSync('rollno.txt','hello ji\n')
// }

function rollNumbers(){
    let rollno = '';
    for(let i=205124001;i<=205124114;i++){
        rollno = rollno + i+"\n"
    }
    return rollno
}
fs.appendFile('rollno.txt',rollNumbers(),()=>{
    console.log("Finished Appending")
})
fs.copyFile('rollno.txt','copy.txt',()=>{
    console.log('finished copying')
})
fs.unlink('copy.txt',()=>{
    console.log('removed the copy of file')
})
