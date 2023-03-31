
const employeeDetails ={
    "name":"vita soft",
    "type":"IT Services",
    "empId":"1234",
    "age":"26",
    "DOB":"24/14/1996",
    "address":{
      "doorNo":"12345",
      "Bulding":"ItTower",
      "line":"ByPassRoad",
      "city":"karimnagar",
      "state":"TS"
      
    },
    "Management" :[

        {
           person:{  
            "name":"shiva",
            "city":"karimnagar",
            "state":"telangana",
        },
            desgnation:"CEO"
        },
        {
            person:{
            "name":"Rama",
            "city":"karimnagar",
            "state":"telangana"
            },
            desgnation:"CID"
        },
        {
           person:{
            "name":"krishna",
            "city":"karimnagar",
            "state":"telangana"
           }, 
            desgnation:"Head HR"
        },
        

    ]
}
console.log(employeeDetails.Management);
const objectkeys =Object.keys(employeeDetails);
const objectvalues =Object.values(employeeDetails);
// console.log(objectkeys);
// console.log(objectvalues);
// console.log("company name",employeeDetails.name);
// console.log("company name",employeeDetails.address);
// objectkeys.forEach((key)=>{
//     console.log(key,employeeDetails[key]);
// });

for(var i=0; i<objectkeys.length; i++){
    console.log(objectkeys[i],objectvalues[i]);
}
console.log(JSON.stringify(employeeDetails));
console.log("-----------------");

const empJsonString=`{"name":"vita soft","type":"IT Services","empId":"1234","age":"26","DOB":"24/14/1996","address":
{"doorNo":"12345","Bulding":"ItTower","line":"ByPassRoad","city":"karimnagar","state":"TS"},"Management":
[{"person":{"name":"shiva","city":"karimnagar","state":"telangana"},"desgnation":"CEO"},{"person":{"name":"Rama","city":"karimnagar","state":"telangana"},"desgnation":"CID"},{"person":{"name":"krishna","city":"karimnagar","state":"telangana"},"desgnation":"Head HR"}]}` 

console.log(empJsonString);
console.log('-----------------------------------');
console.log(JSON.parse(empJsonString));