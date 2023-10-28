const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const Teacher=require('../Models/TeacherModel');
const Student= require('../Models/StudentModel');


const handleTeacherLogin=async(req,res)=>{
    try {
      const {name,email,password,role}=req.body;
      const hashedPassword=await bcrypt.hash(password,10);
      Teacher.findOne({email})
      .then(result=>{
        if(result.name!=name || result.password!=hashedPassword)res.status(401).json("unauthorized");
        else {
          jwt.sign({name,email,role},process.env.SECRET_KEY,(err,encoded)=>{
            if(err)res.status(401).json("unauthorized");
            else res.status(200).json(encoded);
          })
        }
      })
      .catch(err=>console.log(err))
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleStudentLogin=async(req,res)=>{
    try {
      const {name,email,password,role}=req.body;
      const hashedPassword=await bcrypt.hash(password,10);
      Student.findOne({email})
      .then(result=>{
        if(result.name!=name || result.password!=hashedPassword)res.status(401).json("unauthorized");
        else{
          jwt.sign({name,email,role},process.env.SECRET_KEY,(err,encoded)=>{
            if(err)res.status(401).json("unauthorized");
            else res.status(200).json("authenticated");
          })
        }
      })
      .catch(err=>console.log(err))
    } catch (error) {
      console.log(error);
    }
  }

  module.exports={handleTeacherLogin,handleStudentLogin};