import express from "express"
import {
  getAllFeedbackMessages,
  getFeedbackMessage,
  createFeedbackMessage,
  deleteFeedbackMessage,
} from "../controllers/feedback.js"
import auth from "../middlewares/auth.js"

const router = express.Router()

router.get("/", getAllFeedbackMessages)
router.get("/:id", getFeedbackMessage)
router.post("/", createFeedbackMessage)
router.delete('/:id', auth, deleteFeedbackMessage)

export default router
