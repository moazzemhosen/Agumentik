const User = require("../models/user.modules");

const express = require("express");
const router = express.Router();

// Create user



// get all users

router.get("", async (req, res) => {
  //console.log("Yes");
  try {
    const users = await User.find({}).lean().exec();
    return res.status(200).send({ users });
  } catch (er) {
    console.log(er);
    return res.status(500).send({ message: er.message });
  }
});

// get Single user By id

router.get("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (er) {
    console.log(er);
    return res.status(500).send({ message: er.message });
  }
});

// Update a user by id

router.patch("/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send({ user, status: "updated successfully" });
  } catch (er) {
    res.status(500).send({ error: er.message });
  }
});

// delete by id

router.delete("/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({ user, status: "user Deleted successfully" });
  } catch (er) {
    res.status(500).send({ error: er.message });
  }
});

module.exports =router;
