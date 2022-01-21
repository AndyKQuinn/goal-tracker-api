import mongoose from 'mongoose';
import Goal from '../models/goal.js';
import { 
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth
} from 'date-fns';

export const getAllGoals = async (req, res) => {

  try {
    const goals = await Goal.find().sort({ _id: -1 });
    res.status(200).json({ data: goals });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getUserGoals = async (req, res) => {
  const { id, cadence } = req.params;
  const today = new Date()
  const mongoQuery = { userId: id }

  switch (cadence) {
    case 'daily':
      const yesterday = addDays(today, -1)
      const tomorrow = addDays(today, 1)
      mongoQuery.createdOn = { $gt: yesterday, $lt: tomorrow }
      break
    case 'weekly':
      const firstDayOfWeek = startOfWeek(today)
      const lastDayOfWeek = endOfWeek(today)
      mongoQuery.createdOn = { $gte: firstDayOfWeek, $lte: lastDayOfWeek }
      break
    case 'monthly':
      const firstDayOfMonth = startOfMonth(today)
      const lastDayOfMonth = endOfMonth(today)
      mongoQuery.createdOn = { $gte: firstDayOfMonth, $lte: lastDayOfMonth }
      break
    default:
      break
  }

  try {
    const goals = await Goal.find(mongoQuery).sort({ _id: -1 })
    res.status(200).json({ data: goals })
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getGoal = async (req, res) => {
  const { id } = req.params;

  try {
    const goal = await Goal.findById(id);
    res.status(200).json(goal);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createGoal = async (req, res) => {

  try {
    const goal = req.body;

    if (goal?.title?.trim()?.length === 0) return res.status(200).json({ error: "No title given" });
    if (goal?.description?.trim()?.length === 0) return res.status(200).json({ error: "No description given" });

    const newGoal = new Goal({
      title: goal.title,
      description: goal.description,
      cadence: goal.cadence,
      complete: goal.complete,
      userId: goal.userId,
      quantity: goal.quantity,
      createdOn: goal.createdOn,
      updatedOn: goal.updatedOn,
    });
    await newGoal.save();
    res.status(201).json(newGoal);

  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
}

export const updateGoal = async (req, res) => {

  const { id } = req.params;
  const updatedGoal = req.body;

  try {
    await Goal.findByIdAndUpdate(id, updatedGoal);
    res.status(201).json(updatedGoal);
  }
  catch (error) {
    res.status(401).json({ message: error.message });
  }
}

export const deleteGoal = async (req, res) => {

  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No goal with id: ${id}`);

    console.log(id);
    await Goal.findByIdAndRemove(id);

    res.status(201).json({ message: "Movie deleted successfully." });
  }
  catch (error) {
    res.status(401).json({ message: error.message });
  }
}
