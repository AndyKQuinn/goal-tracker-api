import mongoose from "mongoose";
import Task from './task.js'

const goalSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true },
  createdOn: { type: Date, required: true },
  updatedOn: { type: Date, required: true },
  start: { type: Date },
  end: { type: Date },
  active: { type: Boolean },
  tasks: { type: [Task.schema] }
});

const Goal = mongoose.model("goal", goalSchema);
export default Goal;
