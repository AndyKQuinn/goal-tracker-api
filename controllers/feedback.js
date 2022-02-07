import mongoose from 'mongoose'
import Feedback from '../models/feedback.js'

export const getAllFeedbackMessages = async (req, res) => {

  try {
    const messages = await Feedback.find().sort({ _id: -1 })
    res.status(200).json({ data: messages })
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getFeedbackMessage = async (req, res) => {
  const { id } = req.params

  try {
    const message = await Feedback.findById(id)
    res.status(200).json(message)
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createFeedbackMessage = async (req, res) => {
  try {
    const feedbackMessage = req.body

    if (feedbackMessage?.message?.trim()?.length === 0) return res.status(200).json({ error: "No message found in body" })
    if (feedbackMessage?.userID?.trim()?.length === 0) return res.status(200).json({ error: "No userID provided in feedback message" })

    const newFeedbackMessage = new Feedback({
      message: feedbackMessage.message,
      userID: feedbackMessage.userID
    })

    await newFeedbackMessage.save()
    res.status(201).json(newFeedbackMessage)

  } catch (err) {
    res.status(500).json({ message: "Something went wrong" })
  }
}

export const deleteFeedbackMessage = async (req, res) => {

  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No feedback message with id: ${id}`)

    await Feedback.findByIdAndRemove(id)

    res.status(201).json({ message: "Feedback Message deleted successfully." })
  }
  catch (error) {
    res.status(401).json({ message: error.message })
  }
}
