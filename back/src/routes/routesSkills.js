const {Router} = require ("express");
const { getSkills } = require("../controllers/controllersSkills");
 
const routerSkills = Router();

routerSkills.get("/skills",getSkills)

module.exports = routerSkills ;