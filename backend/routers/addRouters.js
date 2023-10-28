const express=require('express')
const router = express.Router();
const {checkToken,checkUser} =require('../middlewares/authentication');
const {handleAddClassTeacher,handleAddClassStudent}= require('../controllers/addControllers')

router.post('/addClassTeacher',checkToken,checkUser,handleAddClassTeacher);
router.post('/addClassStudent',checkToken,checkUser,handleAddClassStudent);


module.exports={addRouters : router};