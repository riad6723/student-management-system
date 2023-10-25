const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors'); 

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))



const {demoTeachers,students, classes, classTeachers,classStudents}=require('./data');

demoTeachers.findOne({id:1})
.then(result=>console.log(result))
.catch(err=>console.log(err))

app.listen(5000,()=>{
    console.log('server running at port 5000')
})