import mongoose from "mongoose";
import LinearDetails from "../models/linearDetails.js";
import SingleMultiDetails from "../models/singleMultiDetails.js";

const sectionSchema = mongoose.Schema({
  id: { type: String, required: true },
  order: { type: Number, required: true },
  questionText: { type: String, required: true },
  questionType: { type: String, required: true },
  required: { type: Boolean, required: true },
  linearDetails: { type: LinearDetails.schema, required: true },
  singleMultiDetails: { type: SingleMultiDetails.schema, required: true }
});

const Section = mongoose.model("section", sectionSchema);
export default Section;