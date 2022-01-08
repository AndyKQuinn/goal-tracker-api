import mongoose from "mongoose";

const linearDetailsSchema = mongoose.Schema({
    min: { type: Number, required: true },
    minText: { type: String },
    max: { type: Number, required: true },
    maxText: { type: String },
});

const LinearDetails = mongoose.model("linearDetail", linearDetailsSchema);
export default LinearDetails;