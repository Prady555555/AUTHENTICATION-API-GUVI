const mongoose = require("mongoose");

const database = process.env.MONGO_KEY;
require("dotenv").config();
async function connect(params) {
  try {
    await mongoose.connect(database);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
}

module.exports = connect;
