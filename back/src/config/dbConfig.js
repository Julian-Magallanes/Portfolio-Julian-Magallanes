require ("dotenv").config();
const { config } = require("dotenv")
const mongoose = require ("mongoose")
const dbConfig = async () => {
    await mongoose.connect(
        process.env.MONGO_URI
    )
    
}

module.exports = dbConfig