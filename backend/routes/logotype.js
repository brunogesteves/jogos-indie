const express = require("express");
const router = express.Router();
const file = require('../model/logotype');

router.get("/", function (req, res) {
    });

  router.post('/', function (req, res) {
    
  });

  router.delete("/", function (req, res) {
    console.log("aqui é delete file");
    
    file
      .del(req.body.file)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log("erro");
        res.sendStatus(500);
      });
  });


module.exports = router;
