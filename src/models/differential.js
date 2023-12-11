import mongoose from "mongoose";

const differentialSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String },
  description: { type: String },
  button: { type: String }
})

const differential = mongoose.model("differential", differentialSchema)

export default differential