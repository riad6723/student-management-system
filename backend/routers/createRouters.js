const express=require('express')
const router = express.Router();
const {handleCreateClassInformation,handleCreatePost}=require('../controllers/createControllers');
const multer = require("multer");
const path = require("path");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images/Others')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({
    storage: storage
  })

router.post('/classInformation',upload.single('file'),handleCreateClassInformation);
router.post('/post',upload.single('file'),handleCreatePost);


module.exports={createRouters : router};