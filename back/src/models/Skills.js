const mongoose = require ("mongoose")

const skillsSchema = new mongoose.Schema ({
    title: {
        type:String,
        required: true,
        unique:true
    },
    urlImage: String,
})
const Skills = mongoose.model("Skills", skillsSchema)
module.exports = Skills