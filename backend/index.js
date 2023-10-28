const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors'); 
const dotenv=require('dotenv');
dotenv.config();
const {addRouters}=require('./routers/addRouters');
const {createRouters}=require('./routers/createRouters');
const {loginRouters}=require('./routers/loginRouters');
const {registerRouters}=require('./routers/registerRouters');

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


  app.use('/api/add',addRouters);
  app.use('/api/create',createRouters);
  app.use('/api/register',registerRouters);
  app.use('/api/login',loginRouters);


app.listen(5000,()=>{
    console.log('server running at port 5000')
})