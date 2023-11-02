const bcrypt = require('bcrypt');
const Teacher=require('../Models/TeacherModel');
const Student= require('../Models/StudentModel');


const handleTeacherRegister=async(req,res)=>{
    try {
      const hashedPassword=await bcrypt.hash(req.body.password,10);
      Teacher.create({name:req.body.name,email:req.body.email,password:hashedPassword,image:req.file?.filename})
      .then(result=>{res.status(200).json(result)})
      .catch(err=>console.log(err))
    } catch (error) {
      console.log(error);
    }
  }

  const handleStudentRegister=async(req,res)=>{
    try {
      const hashedPassword=await bcrypt.hash(req.body.password,10);
      Student.create({name:req.body.name,email:req.body.email,password:hashedPassword,image:req.file?.filename})
      .then(result=>{res.status(200).json(result)})
      .catch(err=>console.log(err))
    } catch (error) {
      console.log(error);
    }
  }

  module.exports={handleStudentRegister,handleTeacherRegister};