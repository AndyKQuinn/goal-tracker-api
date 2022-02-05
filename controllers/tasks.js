import mongoose from 'mongoose';
import Task from '../models/task.js';

export const getGoalTasks = async (req, res) => {
  const { id } = req.params;
  const mongoQuery = { _id: id }

  try {
    const tasks = await Task.find(mongoQuery).sort({ _id: -1 })
    res.status(200).json({ data: tasks })
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    res.status(200).json(task);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createTask = async (req, res) => {

  try {
    const task = req.body;

    if (task?.title?.trim()?.length === 0) return res.status(200).json({ error: "No title given" });
    if (task?.description?.trim()?.length === 0) return res.status(200).json({ error: "No description given" });

    const newTask = new Task({
      title: task.title,
      description: task.description,
      userId: task.userId,
      createdOn: task.createdOn,
      updatedOn: task.updatedOn,
    });
    await newTask.save();
    res.status(201).json(newTask);

  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
}

export const updateTask = async (req, res) => {

  const { id } = req.params;
  const updatedTask = req.body;

  try {
    await Task.findByIdAndUpdate(id, updatedTask);
    res.status(201).json(updatedTask);
  }
  catch (error) {
    res.status(401).json({ message: error.message });
  }
}

export const deleteTask = async (req, res) => {

  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No task with id: ${id}`);

    await Task.findByIdAndRemove(id);

    res.status(201).json({ message: "Task deleted successfully." });
  }
  catch (error) {
    res.status(401).json({ message: error.message });
  }
}
