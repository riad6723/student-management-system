const express=require('express')
const router = express.Router();
const {checkToken,checkUser} =require('../middlewares/authentication');
const {handleAddTeacher,handleAddClassInformation,handleAddStudent,handleAddPost,handleAddClassTeacher,handleAddClassStudent,handleTeacherLogin,handleStudentLogin}= require('../controllers/userControllers')


router.post('/addTeacher',handleAddTeacher);
router.post('/addClassInformation',checkToken,checkUser,handleAddClassInformation);
router.post('/addStudent',handleAddStudent);
router.post('/addPost',checkToken,checkUser,handleAddPost);
router.post('/addClassTeacher',checkToken,checkUser,handleAddClassTeacher);
router.post('/addClassStudent',checkToken,checkUser,handleAddClassStudent);

router.post('/api/user/teacherLogin',handleTeacherLogin);
router.post('/api/user/studentLogin',handleStudentLogin);



module.exports={userRouters : router};