import model from "./model.js";
export const createJob = (job) => model.create(job);
export const findAllJobs = () => model.find();
//export const findJobById = (jobID) => model.findById(jobID);
export const findJobByJobId = (jobID) =>
  model.findOne({ job_id: jobID });
export const findJobsByLocalId = (locID) =>
  model.find({ local_poster_id: locID });
export const updateJob = (jobID, job) =>
  model.updateOne({ job_id: jobID }, { $set: job });
export const deleteJob = (jobID) => model.deleteOne({ job_id: jobID });