import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
  name: { type: String },
  description: { type: String },
  time: { type: Number },
  // user: { type: Schema.Types.ObjectId, ref: "User" },
});

let Job;
// if model exists, use it, else create it
try {
  Job = mongoose.model("Job");
} catch {
  Job = mongoose.model("Job", jobSchema);
}

export default Job;
