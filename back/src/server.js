const express = require ("express");
const routerJobs = require("./routes/routesJobs")
const cors = require ("cors")
const morgan = require ("morgan")
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

app.use( routerJobs)



module.exports = app;