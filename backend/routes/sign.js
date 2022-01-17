const express = require("express");
const router = express.Router();
const sign = require("../model/sign");
require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
const auth = require("../auth");

router.post("/", auth.verify, (req, res, next) => {
  return res.json({ auth: true, token: true });
});

router.post("/in", (req, res, next) => {
  sign
    .getUser(req.body.user, req.body.password)
    .then((user) => {
      if (user[0].pass == req.body.password) {
        const username = user[0].name;
        const userId = user[0].id;
        const token = jwt.sign({ userId }, process.env.SECRET, {
          expiresIn: 60 * 1000 * 3,
        });
        return res.json({ auth: true, token: token, name: username });
      } else {
        res.sendStatus(500).json({ messagem: "Login Invalido" });
      }
    })
    .catch((error) => {
      res.status(500).json({ messagem: "Erro no servidor" });
    });
});

router.post("/out", (req, res, next) => {
  return res.json({ auth: false, token: null });
});

module.exports = router;
