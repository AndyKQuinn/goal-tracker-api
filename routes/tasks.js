import express from "express";
import {
  getAllTasks,
} from "../controllers/tasks.js";
// import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllTasks);

export default router;
