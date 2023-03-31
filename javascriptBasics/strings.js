const companyName = "value labs";
console.log("value :",companyName.length)

// const firstName = companyName.substring(0,6);
// const lastName =companyName.substring(6)
// console.log(`the firstName of company name is ${firstName}. lastName of the company name is ${lastName}`);

const newArray =companyName.split("");
console.log(newArray);

const nameC ="vita tech";
const array =nameC.split("");
console.log("split",array);
const stringFind="tech";
console.log(nameC.includes(stringFind))

console.log(`${stringFind} is the present in the ${nameC} the index value is the${nameC.indexOf(stringFind)}`)
const presentIndex =nameC.indexOf(stringFind);
if(presentIndex<0){
    console.log(`${nameC.indexOf(stringFind)}`)
}else{
    console.log(`not ${nameC.indexOf(stringFind)}`)
}

const nameArray =[
    1,"ramesh",[1,2,3,4,5],

]
for(let i=0; i<nameArray.length;i++){
    console.log(`the element is ${i+1}the in the array is${nameArray[i]} the type is ${typeof(nameArray[i])}`)
}

const isFound= nameArray.includes("shiva")
if(isFound){
    console.log(`the name has consist in the array`)
}else{
    console.log(`the name does not consist in the array`)
}

const  newNubers =[1,2,3,4,5,6]
let squareArray =[];
// newNubers.forEach((x)=>{  
// squareArray.push(x*x)})
// console.log(squareArray);

squareArray = newNubers.map(function(x){ 
    return x*x
})
console.log(squareArray)

const shiva = newNubers.filter(function(x){
    if(x%2===0){
        return x
    }else{
        return null
    }
})
console.log(shiva)

