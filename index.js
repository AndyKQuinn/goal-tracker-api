import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
import goalsRouter from './routes/goals.js'
import tasksRouter from './routes/tasks.js'
import feedbackRouter from './routes/feedback.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/feedback', feedbackRouter)
app.use('/goals', goalsRouter)
app.use('/tasks', tasksRouter)
app.use('/user', userRouter)

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
