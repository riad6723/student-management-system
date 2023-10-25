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
  }
});

const Posts = mongoose.model('Posts', PostsSchema);
module.exports = Posts;
