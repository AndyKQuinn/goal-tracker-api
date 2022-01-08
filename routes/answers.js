import express from "express";
import { addAnswer, getAnswers } from "../controllers/answers.js";

const router = express.Router();

router.get("/:formId", getAnswers);
router.post("/:formId", addAnswer);

export default router;