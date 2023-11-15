const express = require("express");
const router = express.Router();
const Exam = require("../models/examModel");
const authMiddleware = require("../middlewares/authMiddleware");

//add Exam
router.post("/add", authMiddleware, async (req, res) => {
  try {
    //checking if exam already exist
    const examExists = await Exam.findOne({ name: req.body.name });
    if (examExists) {
      return res
        .status(200)
        .send({ message: "Exam already exists", success: false });
    }
    req.body.questions = [];
    const newExam = new Exam(req.body);
    await newExam.save();
    res.send({
      message: "Exam added Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

module.exports = router;
