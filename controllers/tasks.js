import mongoose from 'mongoose';
import Task from '../models/task.js';

export const getAllTasks = async (req, res) => {

  try {
    const tasks = await Task.find().sort({ _id: -1 });
    res.status(200).json({ data: tasks });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}
