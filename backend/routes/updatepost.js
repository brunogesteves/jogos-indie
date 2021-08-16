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
  const { id } = req.params;
  const {
    name,
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
      name,
      content,
      category,
      thumb,
      slug,
      slide,
      middle,
      gameplay,
      gallery,
      publicPost,
      id
    )
    .then((data) => {
      return res.json({ msg: "Atualizado" });
    })
    .catch((error) => {
      console.log("erro ao tentar atualizar");
      res.sendStatus(500);
    });
});

module.exports = router;
