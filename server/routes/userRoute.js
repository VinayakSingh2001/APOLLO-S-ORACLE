// const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(200)
        .send({ message: "user already exist", success: false });
    }

    const newUser = await User(req.body);
    await newUser.save();
    res.send({
      message: "User created Successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
      data: err,
      success: false,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await User.findOne({email});
    if(useremail.password === password){
      res.status(201).send({
        message : "user exist",
        success : true
      })
    }else{
      res.status(500).send({
        message : "invalid email"
      })
    }
  }catch (err) {
    res.status(500).send({
      message: err.message,
      data: err,
      success: false,
    });
  }
});


module.exports = router;
