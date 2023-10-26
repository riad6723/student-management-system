const Teacher=require('../Models/TeacherModel');
const ClassInformation=require('../Models/ClassInformationModel');
const Student= require('../Models/StudentModel');
const Posts=require('../Models/PostsModel');
const bcrypt = require('bcrypt')

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

  module.exports={handleAddTeacher,handleAddClassInformation,handleAddStudent,handleAddPost};