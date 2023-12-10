import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    job_id: { type: String, required: true, unique: true },   

    local_poster_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: false
    },
    local_poster_username: String,

    employer_logo_src: String,
    employer_name: String,
    job_title: String,
    job_is_remote: Boolean,
    job_description: String,
    job_city: String,
    job_state: String,
    job_country: String,

  
  },
  { collection: "jobs" });
export default jobSchema;