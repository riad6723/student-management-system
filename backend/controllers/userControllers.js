const Teacher=require('../Models/TeacherModel');
const ClassInformation=require('../Models/ClassInformationModel');
const Student= require('../Models/StudentModel');
const Posts=require('../Models/PostsModel');
const ClassTeacher=require('../Models/ClassTeacherModel');
const ClassStudent=require('../Models/ClassStudentModel');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');


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
          else res.status(200).json("authenticated");
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

const handleAddTeacher=async(req,res)=>{
    try {
      const hashedPassword=await bcrypt.hash(req.body.password,10);
      Teacher.create({name:req.body.name,email:req.body.email,password:hashedPassword})
      .then(result=>{res.status(200).json(result)})
      .catch(err=>console.log(err))
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddClassInformation=async(req,res)=>{
    try {
      const {teacherName,className,classPic,classDesc,teacherID}=req.body;
      const result= await ClassInformation.create({teacherName,className,classPic,classDesc,teacherID});
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  const handleAddStudent=async(req,res)=>{
    try {
      const hashedPassword=await bcrypt.hash(req.body.password,10);
      Student.create({name:req.body.name,email:req.body.email,password:hashedPassword})
      .then(result=>{res.status(200).json(result)})
      .catch(err=>console.log(err))
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddPost=async(req,res)=>{
    try {
      const {classID,postDesc,teacherID,postTitle}=req.body;
      const result= await Posts.create({classID,postDesc,teacherID,postTitle});
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  const handleAddClassTeacher=(req,res)=>{
    const {teacherID,classID}=req.body;
    ClassTeacher.create({teacherID,classID})
    .then(result=>res.status(200).json(result))
    .catch(err=>console.log(err))
  }

  const handleAddClassStudent=(req,res)=>{
    const {studentID,classID,studentName}=req.body;
    ClassStudent.create({studentID,classID,studentName})
    .then(result=>res.status(200).json(result))
    .catch(err=>console.log(err))
  }

  module.exports={handleAddTeacher,handleAddClassInformation,handleAddStudent,handleAddPost,handleAddClassTeacher,handleAddClassStudent,handleTeacherLogin,handleStudentLogin};