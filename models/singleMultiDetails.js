import mongoose from "mongoose";

const singleMultiDetailsSchema = mongoose.Schema({
    options: { type: [String], required: true },
    otherOption: { type: Boolean, required: true },
});

const SingleMultiDetails = mongoose.model("singleMultiDetail", singleMultiDetailsSchema);
export default SingleMultiDetails;