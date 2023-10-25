const mongoose = require('mongoose');

const ClassTeacherSchema = new mongoose.Schema({
  teacherID: {
    type: String,
    required: true,
  },
  classID: {
    type: String,
    required: true,
  }
});

const ClassTeacher = mongoose.model('ClassTeacher', ClassTeacherSchema);
module.exports = ClassTeacher;
