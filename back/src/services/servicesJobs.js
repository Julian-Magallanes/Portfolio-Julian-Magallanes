const Jobs = require ("../models/Jobs")

module.exports = {
    getJobs: async () => {
        const jobs = await Jobs.find();
        return jobs
    },
    /*postJobs: async (jobs) => {
        const newJobs = new Movies(jobs)
        const savedJobs = await newJobs.save();
        return savedJobs;
    }*/
}