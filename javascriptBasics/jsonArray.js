const employee =[
    {
        name:"shiva",
        qualification:"Btech",
        designation:"Software Engineer",
        gender:"Male",
        YOE:3
},
    {
        name:"Rama",
        qualification:"Mtech",
        designation:"web Developer",
        gender:"Male",
        YOE:4
    },
    {
        name:"Krishna",
        qualification:"MBA",
        designation:"UI Developer",
        gender:"Male",
        YOE:4
    },
    {
        name:"Manisha",
        qualification:"Mtech",
        designation:"web Developer",
        gender:"FeMale",
        YOE:2
    },
    {
        name:"Rajitha",
        qualification:"MCA",
        designation:"Project Manager",
        gender:"FeMale",
        YOE:8
    },
]

const projectManager = employee.find((emp)=>{
    if(emp.designation == "Project Manager"){
        return true;
    }else{
        return false;
    }
})
console.log(projectManager);
const webDeveloper = employee.filter((emp)=>{
    if(emp.designation == "web Developer"){
        return true;
    }else{
        return false;
    }
})
console.log(webDeveloper);

const employeeSeniority =employee.map((emp)=>{
    if(emp.YOE<3){
        emp.seniority ="Associate"
    }else if(emp.YOE>=3 && emp.YOE<7){
        emp.seniority ="intermediate"
    }else if(emp.YOE>7){
        emp.seniority ="Senior"
    }
    return emp

})
console.log("empSeneriority",employeeSeniority);

const Array =[]
for(let i=0; i<=50; i++){
    Array.push(i)
}
const values= Array.filter((emp)=>{
    if(emp%2==0){
        return true
    }else{
        return false
    }
}).map(element=>element*2);
console.log("values", values);
