const express = require("express");
const { body, validationResult } = require("express-validator");
const {
  generateToken,
  login,
  register,
} = require("./controllers/auth.controller");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
 const visitorController = require("./controllers/visitor.controllers");
 const userController = require("./controllers/user.controller");
const iconController=require("./controllers/icon.controller");
const imgController=require("./controllers/img.controller");

app.use("/",imgController);
app.use("/icon",iconController);

 app.use("/visitor", visitorController);
 app.use("/register/all", userController);

// register

app.post(
  "/register",
  body("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name cannot be Empty")
    .isLength({ min: 3 })
    .withMessage("name should contain alleaste 3 charecter"),
  body("email")
    .isEmail()
    .withMessage("Please enter a valid emailId !"),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password should not be empty"),
  // Empliment Strong Regx expression strong password cheak
  body("phone")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number should be ten degit Long"),
    body("role"),
  register
);

// Login
app.post(
  "/login",
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address"),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password should not be empty !"),
  login
);


module.exports = app;
