const EXPRESS = require("express");
const AuthController = require("./controller/Auth.controller");
const connect = require("./db/db");

connect();
const API = EXPRESS();

API.use(EXPRESS.json());

API.use("/auth", AuthController);

API.get("/", (req, res) => {
  res.send("Hello World");
});

API.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000");
});
