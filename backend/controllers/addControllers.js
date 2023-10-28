const ClassTeacher=require('../Models/ClassTeacherModel');
const ClassStudent=require('../Models/ClassStudentModel');


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

  module.exports={handleAddClassTeacher,handleAddClassStudent};