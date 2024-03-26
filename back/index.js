const app = require ("./src/server.js")
const dbConfig = require("./src/config/dbConfig.js")
const puerto = 3002;

dbConfig().then(
    res =>{
        app.listen(puerto, () =>{
            console.log(`server listening on http://localhost:${puerto}`);
        })
    }
)