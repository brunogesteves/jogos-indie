const express = require("express");
const router = express.Router();
const newpost = require("../model/newpost");

router.post("/", function (req, res) {
  const {
    namePost,
    content,
    category,
    thumb,
    slugify,
    datetime,
    slide,
    middle,
    gameplay,
    gallery,
    schedule,
    publicpost,
  } = req.body;
  newpost
    .set(
      namePost,
      content,
      category,
      thumb,
      slugify,
      datetime,
      slide,
      middle,
      gameplay,
      gallery,
      schedule,
      publicpost
    )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json("Nome já usado");
    });
});

module.exports = router;
