import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true },
  cadence: { type: String, required: true },
  complete: { type: Boolean, required: true },
});

const Goal = mongoose.model("goal", goalSchema);
export default Goal;
