const jwt = require("jsonwebtoken");
require("dotenv").config();
function token(req, res, next) {
  const ticket = req.headers["token"];
  if (!ticket) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(ticket, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = token;
