const express=require('express')
const router = express.Router();
const {handleStudentRegister,handleTeacherRegister}=require('../controllers/registerControllers');

router.post('/teacher',handleTeacherRegister);
router.post('/student',handleStudentRegister);


module.exports={registerRouters : router};