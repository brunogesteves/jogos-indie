const express = require("express");
const router = express.Router();
const schedule = require("../model/schedule");

router.get("/", function (req, res) {
  schedule
  .get()
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    res.sendStatus(500);
  });
});

module.exports = router;
