import mongoose from "mongoose"

const feedbackSchema = mongoose.Schema({
  message: { type: String, required: true },
  userID: { type: String, required: true }
})

const Feedback = mongoose.model("feedback", feedbackSchema)
export default Feedback
