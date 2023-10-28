const express=require('express')
const router = express.Router();
const {handleCreateClassInformation,handleCreatePost}=require('../controllers/createControllers');

router.post('/ClassInformation',handleCreateClassInformation);
router.post('/Post',handleCreatePost);


module.exports={createRouters : router};