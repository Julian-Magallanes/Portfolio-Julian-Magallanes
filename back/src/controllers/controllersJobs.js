const {getJobs} = require ("../services/servicesJobs")

module.exports = {
    getJobs: async (req, res) =>{
        try {
            const jobs = await getJobs();
            res
              .status(200)
              .json(jobs);
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