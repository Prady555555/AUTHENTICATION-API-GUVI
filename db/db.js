const mongoose = require("mongoose");

require("dotenv").config();
async function connect(params) {
  try {
    await mongoose.connect(process.env.MONGO_KEY);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
}

module.exports = connect;
