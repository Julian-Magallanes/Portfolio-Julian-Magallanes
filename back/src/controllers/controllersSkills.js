const {getSkills} = require ("../services/sevicesSkills")

module.exports = {
    getSkills: async (req, res) =>{
        try {
            const skills = await getSkills();
            res
              .status(200)
              .json(skills);
          } catch (error) {
            res
              .status(500)
              .json({
                message: "Error al obtener los datos",
                error: error.message
              })
          }
    },
}