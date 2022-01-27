import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  goalId: { type: String },
  createdOn: { type: Date, required: true },
  updatedOn: { type: Date, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  datesCompleted: { type: [String] },
})

const Task = mongoose.model("task", taskSchema);
export default Task;
