const Teacher=require('../Models/TeacherModel');
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

  module.exports={handleAddTeacher};