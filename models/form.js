import mongoose from "mongoose";
import Section from "./section.js";

const formSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    sections: { type: [Section.schema], required: true }
});

const Form = mongoose.model("form", formSchema);
export default Form;
