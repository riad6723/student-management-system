const mongoose = require('mongoose');

const ClassInformationSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  classPic: {
    type: String,
    required: false,
  },
  classDesc: {
    type: String,
    required: false,
  },
  teacherID:{
    type: String,
    required:true,
  }
},
{timestamps:true}
);

const ClassInformation = mongoose.model('ClassInformation', ClassInformationSchema);
module.exports = ClassInformation;
