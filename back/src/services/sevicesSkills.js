const Skills = require ("../models/Skills")

module.exports = {
    getSkills: async () => {
        const skills = await Skills.find();
        return skills
    },
    /*postSkills: async (skills) => {
        const newSkills = new Movies(skills)
        const savedSkills = await newSkills.save();
        return savedSkills;
    }*/
}