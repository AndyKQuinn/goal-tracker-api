import express from "express";
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.patch("/:id", auth, updateTask);
router.delete('/:id', auth, deleteTask);

export default router;
