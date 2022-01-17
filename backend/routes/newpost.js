const express = require("express");
const router = express.Router();
const newpost = require("../model/newpost");

router.post("/", function (req, res) {
  const {
    name,
    content,
    category,
    thumb,
    slug,
    schedule,
    datetime,
    slide,
    middle,
    gameplay,
    gallery,
    publicpost,
  } = req.body;
  newpost
    .set(
      name,
      content,
      category,
      thumb,
      slug,
      schedule,
      datetime,
      slide,
      middle,
      gameplay,
      gallery,
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
