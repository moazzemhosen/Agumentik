const  Social =require("../models/cart.models")

const express = require("express");

const router = express.Router();

// Post Todo
// GET All the Todo

router.get("/all", async (req, res) => {
  try {
    const data = await  Social.find({}).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await  Social.create(req.body);
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});



// Update One By Id

router.patch("/:id", async (req, res) => {
  console.log( req.params.id );
  try {
    const data = await  Social.findOneAndUpdate({ _id: req.params.id }, req.body, {
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

// router.delete("/:id", async (req, res) => {
//   try {
//     const data = await  Social.findByIdAndDelete(req.params.id).lean().exec();
//     return res.status(200).send(data);
//   } catch (er) {
//     res.status(500).send({ error: er.message });
//   }
// });


module.exports = router;
