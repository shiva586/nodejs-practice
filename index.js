// const http = require('http');
// http.createServer((request,response)=>{
//     //console.log(request.body,request.params,request.query);
//     console.log(request.url)
//     response.setHeader("content-Type","application/json");
//     response.write(JSON.stringify({name:"shiva", age:"27"}));
//     response.end();
// }).listen(5555);
const express = require('express');
const fileSystem =require("fs");
const application = express();
application.use(express.json());
application.use(express.urlencoded({extended:true}));
const jsonData= fileSystem.readFileSync("./employee.json");
jsonDataFile =jsonData.toString();
const employee =JSON.parse(jsonDataFile);
console.log(employee);
application.get('/',function(req,res){
    res.send("the employee manage ment system");
})
application.get('/employees',function(req,res){  
  res.send(employee) ;
})
application.get('/employees/search-by-qualification',function(req,res){  
    //console.log(req.body, req.params, req.query)
    const filterqualification =employee.filter(emp=>emp.qualification == req.query.qualification);
    res.send(filterqualification) ;
  })
  application.get('/employees/search-by-gender/:gender',function(req,res){  
    console.log(req.params)
    const filterqualification =employee.filter(emp=>emp.gender == req.params.gender);
    res.send(filterqualification) ;
  })
  application.get('/employees/search-by-experience/:min:max',function(req,res){  
    console.log(req.params)
    const filterexperience =employee.filter(emp=>(emp.YOE == req.params.min)&&(emp.YOE==req.params.max));
    res.send(filterexperience) ;
  })

  application.post('/employees/create',(req,res)=>{
    console.log(req.body);
    employee.push(req.body);
    fileSystem.writeFileSync('./employee.json',JSON.stringify(employee));
    res.send(employee);
  })

  application.put('/employees/update',(req,res)=>{
     const updatedEmployee =employee.map(emp=>{
         if(emp.name === req.body.name){
             //const updateEmp =Object.assign({},emp)
             //updateEmp.qualification =req.body.qualification
             updateEmp ={
                ...employee,
                ...req.body
             }

            return updateEmp
        }else{
             return employee
         }
    })
    fileSystem.writeFileSync('./employee.json',JSON.stringify(updatedEmployee))
     res.send(updatedEmployee);
    

  })
application.listen(5555);
