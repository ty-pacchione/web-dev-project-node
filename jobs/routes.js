import * as dao from "./dao.js";

function JobRoutes(app) {

    const createJob = async (req, res) => {
        const job = await dao.createJob(req.body);
        res.json(job);
    };
      

    const deleteJob = async (req, res) => {
        const status = await dao.deleteJob(req.params.jobID);
        res.json(status);
    };
  

  const findAllJobs = async (req, res) => {
    const jobs = await dao.findAllJobs();
    res.json(jobs);
  };

  const findJobById = async (req, res) => {
    try {
        const job = await dao.findJobByJobId(req.params.jobID);
        res.json(job);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    }
    
  };

  const updateJob = async (req, res) => {
    const { jobID } = req.params;
    const status = await dao.updateJob(jobID, req.body);
    const currentJob = await dao.findJobByJobId(jobID);
    res.json(currentJob);
  };

  const findJobsByLocalId = async (req, res) => {
    try {
      const jobs = await dao.findJobsByLocalId(req.params.localID);
      res.json(jobs);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    }

  }


  app.post("/api/jobs", createJob);
  app.get("/api/jobs", findAllJobs);
  app.get("/api/jobs/:jobID", findJobById);
  app.get("/api/jobs/localID/:localID", findJobsByLocalId);
  app.put("/api/jobs/:jobID", updateJob);
  app.delete("/api/jobs/:jobID", deleteJob);

}
export default JobRoutes;
