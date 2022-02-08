import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  imageUrl: { type: String },
  admin: { type: Boolean }
})

export default mongoose.model("user", userSchema)