import model from "./model.js";
export const createBookmark = (jobID, userID) => model.create({job_id: jobID, user_id: userID});
export const findAllBookmarks = () => model.find();

export const findBookmarksForUser = (userID) =>
  model.find({ user_id: userID });

export const findBookmarksForJob = (jobID) =>
  model.find({ job_id: jobID });

export const findBookmark = (jobID, userID) => model.findOne({ user_id: userID, job_id: jobID });  

export const deleteBookmark = (jobID, userID) => model.deleteOne({ job_id: jobID, user_id: userID });