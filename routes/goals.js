import express from "express";
import {
  createGoal,
  getAllGoals,
  getUserGoals,
  getGoal,
  updateGoal,
  deleteGoal
} from "../controllers/goals.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllGoals);
router.get("/users/:id/:cadence", getUserGoals);
router.get("/:id", getGoal);
router.post("/", createGoal);
router.patch("/:id", auth, updateGoal);
router.delete('/:id', auth, deleteGoal);

export default router;
