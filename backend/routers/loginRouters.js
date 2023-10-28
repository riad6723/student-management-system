const express=require('express')
const router = express.Router();
const {handleStudentLogin,handleTeacherLogin}=require('../controllers/loginControllers');

router.post('/teacher',handleTeacherLogin);
router.post('/student',handleStudentLogin);

module.exports={loginRouters : router};