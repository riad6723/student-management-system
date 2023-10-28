const express=require('express')
const router = express.Router();
const {checkToken,checkUser} =require('../middlewares/authentication');
const {handleAddClassTeacher,handleAddClassStudent}= require('../controllers/addControllers')

router.post('/classTeacher',checkToken,checkUser,handleAddClassTeacher);
router.post('/classStudent',checkToken,checkUser,handleAddClassStudent);


module.exports={addRouters : router};