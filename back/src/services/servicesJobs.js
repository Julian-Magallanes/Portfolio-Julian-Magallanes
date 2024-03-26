const Jobs = require ("../models/Jobs")

module.exports = {
    getJobs: async () => {
        const jobs = await Jobs.find();
        return jobs
    },
    /*postJobs: async (movie) => {
        const newMovie = new Movies(movie)
        const savedMovie = await newMovie.save();
        return savedMovie;
    }*/
}