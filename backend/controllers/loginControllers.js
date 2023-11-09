const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const Teacher=require('../Models/TeacherModel');
const Student= require('../Models/StudentModel');


const handleTeacherLogin=async(req,res)=>{
    try {
      const {email,password,role}=req.body;
      Teacher.findOne({email})
      .then(result=>{
        bcrypt.compare(password, result.password, (error, response) => {
          if(response) {
            jwt.sign({name:result.name,email,role},process.env.SECRET_KEY,(err,encoded)=>{
              if(err)res.status(401).json("unauthorized");
              else res.status(200).json(encoded);
            })
          }
          else {
            res.status(401).json("unauthorized");
          }
      })
      })
      .catch(err=>res.status(401).json("unauthorized"))
    } catch (error) {
      res.status(401).json("unauthorized");
    }
  }
  
  const handleStudentLogin=async(req,res)=>{
    try {
      const {email,password,role}=req.body;
      Student.findOne({email})
      .then(result=>{
        bcrypt.compare(password, result.password, (error, response) => {
          if(response) {
            jwt.sign({name:result.name,email,role},process.env.SECRET_KEY,(err,encoded)=>{
              if(err)res.status(401).json("unauthorized");
              else res.status(200).json(encoded);
            })
          }
          else {
            res.status(401).json("unauthorized");
          }
      })
      })
      .catch(err=>console.log(err))
    } catch (error) {
      console.log(error);
    }
  }

  module.exports={handleTeacherLogin,handleStudentLogin};