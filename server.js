const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


app.post("/generate-curriculum",(req,res)=>{

const {course,level,duration}=req.body;

let curriculum=[];

for(let i=1;i<=duration;i++){

curriculum.push(`Week ${i}: ${course} - Topic ${i}`);

}

res.json({

course:course,

level:level,

duration:duration,

curriculum:curriculum

});

});


app.listen(5000,()=>{

console.log("Server running on http://localhost:5000");

});