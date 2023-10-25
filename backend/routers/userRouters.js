const express=require('express')
const router = express.Router();
const {handleAddTeacher}= require('../controllers/userControllers')


router.get('/addTeacher',handleAddTeacher);


module.exports={userRouters : router};