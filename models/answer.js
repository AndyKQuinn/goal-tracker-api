import mongoose from 'mongoose';

const answerSchema = mongoose.Schema({
    text: { type: String },
    singleOption: { type: String },
    multiOptions: { type: [String], default: [] },
    linearOption: {type: Number, default: -1},
    questionType: {type: String, required: true },
    questionText: {type: String, required: true },
    required: {type: Boolean}
});

const Answer = mongoose.model('simpleAnswer', answerSchema);
export default Answer;