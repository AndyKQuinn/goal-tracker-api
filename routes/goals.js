import express from "express";
import {
  createGoal,
  getAllGoals,
  getUserGoalsAll,
  getUserGoalsToday,
  getGoal,
  updateGoal,
  deleteGoal
} from "../controllers/goals.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllGoals);
router.get("/users/:id/all", getUserGoalsAll);
router.get("/users/:id/today", getUserGoalsToday)
router.get("/:id", getGoal);
router.post("/", createGoal);
router.patch("/:id", auth, updateGoal);
router.delete('/:id', auth, deleteGoal);

export default router;
