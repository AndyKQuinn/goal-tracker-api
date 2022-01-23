import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdOn: { type: Date, required: true },
  updatedOn: { type: Date, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  quantity: { type: Number, required: true }
})

const Task = mongoose.model("task", taskSchema);
export default Task;
