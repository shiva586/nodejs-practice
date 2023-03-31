// console.log("Hello Coders")

// const one = 1
// console.log("The value of the variable one:",one)
// const two = 2
// console.log("The value of the variable two:",two)

// console.log(`the value of one and two is ${one+two}`)

// let maxNumber = 100;
// for(let i=1; i<=100; i++){
//     console.log(i)
// }

let maxxNumber = 100;
for(let i=1; i<maxxNumber; i++){
    if(i%2 ==0){
         printLine("the even number is",i)
    }else{
         printLine("the odd number is",i)
    }
}

function printLine(message){
    console.log(message)
}