const mongoose = require ("mongoose")

const moviesSchema = new mongoose.Schema ({
    title: {
        type:String,
        required: true,
        unique:true
    },
    description: String,
    urlGitHub: String,
    urlPage: String,
    skills: [String],
    urlImage: String,
})
const Jobs = mongoose.model("Jobs", moviesSchema)
module.exports = Jobs