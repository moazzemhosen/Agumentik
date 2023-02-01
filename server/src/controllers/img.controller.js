const Image = require("../models/img.models");

const express = require("express");

const router = express.Router();

// Post Todo

router.post("", async (req, res) => {
  try {
    const data = await Image.create(req.body);
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

// GET All the Todo

router.get("", async (req, res) => {
  try {
    const data = await Image.find({}).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});



router.get("/:id", async (req, res) => {
  
  try {
     
      const data = await Image.findOne({_id: req.params.id}).lean().exec();
      return res.status(200).send(data);
    } catch (er) {
      return res.status(500).send({ error: er.message });
    }
  });

// Update One By Id

router.patch("/:id", async (req, res) => {
  //console.log(req.params.id);
  try {
    const data = await Image.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
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
    const data = await Image.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    res.status(500).send({ error: er.message });
  }
});


module.exports = router;
