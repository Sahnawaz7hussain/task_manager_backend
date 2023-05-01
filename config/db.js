const mongoose = require("mongoose");
require("dotenv").config();
const mongo_url = process.env.MONGO_URL;

const connection = mongoose.connect(mongo_url);

module.export = { connection };
