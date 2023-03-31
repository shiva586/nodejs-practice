const fs = require("fs");
const express = require('express');
const application = express();

application.use(express.json());
application.use(express.urlencoded({extended:true}));

const { resolve } = require("path");
// const studentRawData =fs.readFileSync('./student.json');
// const studentString =studentRawData.toString();
// const studentJson =JSON.parse(studentString)
// console.log(studentJson)

function readFile(fileName){  
return new Promise((resolve,reject)=>{
    fs.readFile(fileName,(err,data)=>{
        if(err){
         reject("Error i read data")
        }else{
         const studentString =data.toString();
         const studentJson =JSON.parse(studentString)
         resolve(studentJson)
        }
     })

})

}
// async function loadFile(){ 
// const fileDataPromise =await readFile('./student.json')
// console.log(fileDataPromise)
// }
// loadFile()
let students =[];

(async()=>{
    students =await readFile('./student.json')
})()

application.get('/allstudents',(req,res)=>{
    res.send(students)

})
application.post('/allstudents/create',(req,res)=>{
 students.push(req.body);
 fs.writeFileSync('./student.json',JSON.stringify(students));
 res.send(students)
})
application.listen(4444,()=>{
    console.log("application is running on port 4444")
})

// console.log(fileDataPromise);
// fileDataPromise.then(result=>{
// console.log(result)
// })
// .catch(err=>{
//   console.log(err);
// })