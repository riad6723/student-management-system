const ClassInformation=require('../Models/ClassInformationModel');
const Posts=require('../Models/PostsModel');


const handleCreateClassInformation=async(req,res)=>{
    try {
      const {teacherName,className,classDesc,teacherID}=req.body;
      const result= await ClassInformation.create({teacherName,className,classPic:req.file.filename,classDesc,teacherID});
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  const handleCreatePost=async(req,res)=>{
    try {
      const {classID,postDesc,teacherID,postTitle}=req.body;
      const result= await Posts.create({classID,postDesc,teacherID,postTitle,postImage:req.file.filename});
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  module.exports={handleCreateClassInformation,handleCreatePost};