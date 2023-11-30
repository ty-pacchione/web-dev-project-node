import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["JOB-SEEKING", "JOB-POSTER", "ADMIN"],
      default: "JOB-SEEKING" },
  },
  { collection: "users" });
export default userSchema;