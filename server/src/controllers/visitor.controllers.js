const Visitor = require("../models/visitor.models");

const express = require("express");

const router = express.Router();

// Post Todo

router.post("/", async (req, res) => {
  try {
    const data = await Visitor.create(req.body);
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

// GET All the Todo

router.get("/All", async (req, res) => {
  try {
    const data = await Visitor.find({}).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

// Update One By Id

router.patch("/:id", async (req, res) => {
  try {
    const data = await Visitor.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

//  delete by id

router.delete("/:id", async (req, res) => {
  try {
    const data = await Visitor.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    res.status(500).send({ error: er.message });
  }
});

// Find Visitors by user name

router.get("/user/:user", async (req, res) => {
  try {
    const data = await Visitor.find({ user: req.params.user }).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});
module.exports = router;
