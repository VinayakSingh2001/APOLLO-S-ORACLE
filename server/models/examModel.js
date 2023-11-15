//examModel.js
const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
name: {
type: String,
required: true,

},
duration: {
type: Number,
required: true,
},
category: {
type: String,
required: true,
},totalMarks: {
type: String,
required: true,

},
passingMarks: {
type: Number,
required: true,
},
questions: {
type: [mongoose.Schema.Types.ObjectId],
ref: 'questions',
required: true,
}

});

const Exam = mongoose.model('exams', examSchema);
module.export = Exam;
