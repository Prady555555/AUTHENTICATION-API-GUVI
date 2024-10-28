const EXPRESS = require("express");
const AuthController = require("./controller/Auth.controller");
const connect = require("./db/db");

connect();
const API = EXPRESS();

API.use(EXPRESS.json());

API.use("/auth", AuthController);

API.get("/", (req, res) => {
  res.status(200).json({
    message: "  Welcome to Authication Api by PradeepDurai",
  });
});

API.listen(process.env.PORT, process.env.HOSTNAME, function () {
  console.log(
    `Server started on port ${process.env.PORT} and host ${process.env.HOSTNAME}`
  );
});
