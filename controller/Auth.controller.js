const AuthController = require("express").Router();
const signupModel = require("../models/Signup.models");
const jwtt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const token = require("../middleware/middleware");
require("dotenv").config();
AuthController.get("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await signupModel.findOne({ email });

    if (!result) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const pass = await bcrypt.compare(password, result.password);
    if (!pass) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const jwt = jwtt.sign({ id: result._id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "User logged in successfully",
      details: result,
      token: jwt,
    });
  } catch (error) {
    console.log(error.message);
  }
});

AuthController.post("/signup", async (req, res) => {
  try {
    const existingUser = await signupModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    } else {
      const newUser = new signupModel(req.body); // Create an instance of the model
      const result = await newUser.save(); // Save to trigger the pre-save middleware
      return res.status(200).json({
        message: "User created successfully",
        details: result,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});
AuthController.get("/get", token, async (req, res) => {
  try {
    const result = await signupModel.findById(req.user.id).select("-password");
    return res.status(200).json({
      message: "User information get successfully",
      details: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = AuthController;
