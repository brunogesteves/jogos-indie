const express = require("express");
const router = express.Router();
const updatepost = require("../model/updatepost");

router.get("/:id", function (req, res) {
  updatepost
    .get(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.put("/:id", function (req, res) {
  const {
    namePost,
    content,
    category,
    thumb,
    slug,
    slide,
    middle,
    gameplay,
    gallery,
    publicPost,
  } = req.body;
  updatepost
    .update(
      req.params.id,
      namePost,
      content,
      category,
      thumb,
      slug,
      slide,
      middle,
      gameplay,
      gallery,
      publicPost
    )
    .then((data) => {
      return res.json({ msg: "Atualizado" });
    })
    .catch((error) => {
      console.log("erro");
      res.sendStatus(500);
    });
});

module.exports = router;
