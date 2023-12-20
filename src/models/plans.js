import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const plansSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  url: { type: String },
  title: { type: String },
  subTitle: { type: String }, 
  prince: { type: Number },
  recommended: { type: Boolean }
})

const plans = mongoose.model("plans", plansSchema)

export default plans