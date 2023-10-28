const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
  teacherID: {
    type: String,
    required: true,
  },
  classID: {
    type: String,
    required: true,
  },
  postTitle:{
    type: String,
    required: true
  },
  postDesc:{
    type: String,
    required: false
  },
  postImage:{
    type: String,
    required:false,
  }
},
{timestamps:true}
);

const Posts = mongoose.model('Posts', PostsSchema);
module.exports = Posts;
