const studentMarks =[
    {
        name:"rajesh",
        subjectWiseMarks:[
            {
            marks:78,
            subject:"Maths"
            },
            {
            marks:60,
            subject:"physics"
            },
            {
             marks:75,
            subject:"Chemistry"
            },
           
        ]
    },
    {
        name:"ramesh",
        subjectWiseMarks:[
            {
            marks:50,
            subject:"Maths"
            },
            {
            marks:55,
            subject:"physics"
            },
            {
             marks:65,
            subject:"Chemistry"
            },
           
        ]
    },
    {
        name:"kiran",
        subjectWiseMarks:[
            {
            marks:60,
            subject:"Maths"
            },
            {
            marks:58,
            subject:"physics"
            },
            {
             marks:61,
            subject:"Chemistry"
            },
           
        ]
    },
]

// const studentTotalMarks = studentMarks.map((student)=>{
//     let TotalMarks =0;
//     student.subjectWiseMarks.forEach(subject =>TotalMarks = TotalMarks+subject.marks);
//     return {StudentName:student.name,Totalmarks:TotalMarks}
// })
// console.log(studentTotalMarks);

// const studentDistenction = studentMarks.map((student)=>{
//     let TotalMarks =0;
//     student.subjectWiseMarks.forEach(subject =>TotalMarks = TotalMarks+subject.marks);
//     return {StudentName:student.name,Totalmarks:TotalMarks}
// }).filter((sData)=>{
//     if(sData.Totalmarks>200){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(studentDistenction);
const studentDistenction = studentMarks.map((student)=>{
    let TotalMarks =0;
    student.subjectWiseMarks.forEach(subject =>TotalMarks = TotalMarks+subject.marks);
    return {StudentName:student.name,Totalmarks:TotalMarks}
}).filter((sData)=>sData.Totalmarks>200);
console.log("studentDistenction",studentDistenction);