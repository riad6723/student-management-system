const express=require('express')
const router = express.Router();
const {handleStudentRegister,handleTeacherRegister}=require('../controllers/registerControllers');
const multer = require("multer");
const path = require("path");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images/Users')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({
    storage: storage
  })


router.post('/teacher',upload.single('file'),handleTeacherRegister);
router.post('/student',upload.single('file'),handleStudentRegister);


module.exports={registerRouters : router};