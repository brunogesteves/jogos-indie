const express = require("express");
const router = express.Router();
const posts = require("../model/posts");

router.get("/", function (req, res) {
  posts
    .get()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/slide", function (req, res) {
  posts
    .getSlide()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/middle", function (req, res) {
  posts
    .getMiddle()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/gameplay", function (req, res) {
  posts
    .getGameplay()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/gallery", function (req, res) {
  posts
    .getGallery()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.put("/", function (req, res) {
  const { place, option, id } = req.body;
  posts
    .update(place, option, id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("erro");
      res.sendStatus(500);
    });
});

router.delete("/", function (req, res) {
  const { postId } = req.body;
  posts
    .del(postId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.post("/search", function (req, res) {
  const { word } = req.body;
  posts
    .getSearch(word)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/random", function (req, res) {
  posts
    .random()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

module.exports = router;
