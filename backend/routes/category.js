const express = require("express");
const router = express.Router();
const category = require("../model/category");

router.get("/", function (req, res) {
  category
    .get()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/random", function (req, res) {
  category
    .random()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/:category", function (req, res) {
  category
    .category(req.params.category)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.post("/", function (req, res) {
  const { name } = req.body;
  category
    .set(name)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("erro post");
      res.sendStatus(500);
    });
});

router.delete("/", function (req, res) {
  category
    .del(req.body.name)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("erro");
      res.sendStatus(500);
    });
});

module.exports = router;
