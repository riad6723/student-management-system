const express=require('express')
const router = express.Router();
const {handleAddTeacher,handleAddClassInformation,handleAddStudent,handleAddPost}= require('../controllers/userControllers')


router.post('/addTeacher',handleAddTeacher);
router.post('/addClassInformation',handleAddClassInformation);
router.post('/addStudent',handleAddStudent);
router.post('/addPost',handleAddPost);



module.exports={userRouters : router};