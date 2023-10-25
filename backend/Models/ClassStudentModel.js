const mongoose = require('mongoose');

const ClassStudentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
  },
  classID: {
    type: String,
    required: true,
  }
});

const ClassStudent = mongoose.model('ClassStudent', ClassStudentSchema);
module.exports = ClassStudent;
