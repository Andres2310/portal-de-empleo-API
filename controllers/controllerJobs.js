const jobOffer = require("../models/jobOffer");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await jobOffer.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJob = async (req, res) => {
  try {
    const job = await jobOffer.find({ idOffer: req.params.idOffer });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postJobs = async (req, res) => {
  try {
    const job = await new jobOffer(req.body);
    const savedJob = await job.save();
    res.status(200).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllJobs,
  getJob,
  postJobs,
};
