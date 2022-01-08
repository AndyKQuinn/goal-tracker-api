import mongoose from "mongoose";
import Answer from "./answer.js";

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const formAnswerSchema = mongoose.Schema({
    formId: { type: ObjectId },
    nick: { type: String, required: true },
    answers: [Answer.schema]
});

const FormAnswer = mongoose.model("answer", formAnswerSchema);
export default FormAnswer;
