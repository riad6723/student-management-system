const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors'); 
const dotenv=require('dotenv');
dotenv.config();
const {userRouters}=require('./routers/userRouters');

app.use(express.json());
app.use(express.static('Public'))
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{console.log("connected to mongodb")})
  .catch((err)=>console.log(err));


  //app.use('/api/user',checkToken);
  app.use('/api/user',userRouters);


app.listen(5000,()=>{
    console.log('server running at port 5000')
})