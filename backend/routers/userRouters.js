const express=require('express')
const router = express.Router();
const {checkToken} =require('../middlewares/authentication');
const {handleAddTeacher,handleAddClassInformation,handleAddStudent,handleAddPost,handleAddClassTeacher,handleAddClassStudent,handleTeacherLogin,handleStudentLogin}= require('../controllers/userControllers')


router.post('/addTeacher',handleAddTeacher);
router.post('/addClassInformation',checkToken,handleAddClassInformation);
router.post('/addStudent',handleAddStudent);
router.post('/addPost',checkToken,handleAddPost);
router.post('/addClassTeacher',checkToken,handleAddClassTeacher);
router.post('/addClassStudent',checkToken,handleAddClassStudent);

router.post('/api/user/teacherLogin',handleTeacherLogin);
router.post('/api/user/studentLogin',handleStudentLogin);



module.exports={userRouters : router};