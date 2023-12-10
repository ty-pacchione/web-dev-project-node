import mongoose from "mongoose";
const bookmarkSchema = new mongoose.Schema({
    job_id: { type: String, required: true, ref: "jobs" },   
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "users"},
  },
  { collection: "bookmarks" });
export default bookmarkSchema;