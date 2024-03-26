const {Router} = require ("express");
const {getJobs} = require ("../controllers/controllersJobs")
 
const routerJobs = Router();

routerJobs.get("/jobs",getJobs)

module.exports = routerJobs;