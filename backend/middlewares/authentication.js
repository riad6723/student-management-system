const jwt=require('jsonwebtoken');
const Teacher = require('../Models/TeacherModel');
const Student=require('../Models/StudentModel');


const checkToken= (req,res,next)=>{
    const token=req.headers.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
    try {
        req.user=null;
        const decoded =jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
}

const checkUser= (req,res,next)=>{
    const {name,email,role}=req.user;
    if(role=='teacher'){
        Teacher.findOne({email})
        .then(result=>{
            if(result)next();
            else return res.status(401).json({ message: 'Unauthorized: user does not exist' });
        })
        .catch(err=>{
            return res.status(401).json({ message: 'Unauthorized: user does not exist' });
        })
    }
    else{
        Student.findOne({email})
        .then(result=>{
            if(result)next();
            else return res.status(401).json({ message: 'Unauthorized: user does not exist' });
        })
        .catch(err=>{
            return res.status(401).json({ message: 'Unauthorized: user does not exist' });
        })
    }
}

module.exports={checkToken,checkUser};