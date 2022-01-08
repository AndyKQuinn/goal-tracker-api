import mongoose from 'mongoose';
import FormAnswer from '../models/formAnswer.js';
import Answer from '../models/answer.js';

export const getAnswers = async (req, res) => {
    try {
        const { formId } = req.params;

        FormAnswer.find({ formId: new mongoose.Types.ObjectId(formId) }, (err, formAnswer) => {
            if (err) {
                throw new Error(err);
            }
            res.status(200).json(formAnswer);
        });
    }
    catch(error) {
        console.log(error.message);
        res.status(409).json({ message: error.message });
    }
}

export const addAnswer = async (req, res) => {
    const { formId } = req.params;
    const { formAnswer } = req.body;

    try {
        const newFormAnswer = new FormAnswer();
        newFormAnswer.formId = formId;
        newFormAnswer.nick = formAnswer.nick;

        const answers = [];
        for (let answer of formAnswer.answers) {
            const newAnswer = new Answer();
            newAnswer.text = answer.text;
            newAnswer.singleOption = answer.singleOption;
            newAnswer.multiOptions = answer.multiOptions;
            newAnswer.linearOption = answer.linearOption;
            newAnswer.questionType = answer.questionType;
            newAnswer.questionText = answer.questionText;
            newAnswer.required = answer.required;
            answers.push(newAnswer);
        }

        newFormAnswer.answers = answers;
        await newFormAnswer.save();

        res.status(200).json(newFormAnswer);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}