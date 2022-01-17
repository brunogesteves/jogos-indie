const express = require("express");
const router = express.Router();
const multer = require("multer");
const images = require("../model/images");
const fs = require("fs");
const { promisify } = require("util");
const findRemoveSync = require("find-remove");

router.get("/", function (req, res) {
  images
    .get()
    .then((data) => {
      const result = data.map((img, i) => {
        return {
          src: "/" + img.name,
          name: img.name.replace(",jpg", ""),
          alt: img.name.replace(",jpg", ""),
          tag: "",
        };
      });

      res.json({
        statusCode: 200,
        result,
      });
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/thumbs", function (req, res) {
  images
    .get()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "Atenção: Adicionar uma foto" });
  }

  const file = req.files.file;

  images
    .set(file.name)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("erro");
      res.sendStatus(500);
    });

  file.mv(`${__dirname}/../../frontend/public/${file.name}`, (err) => {
    if (err) {
      console.log("erro no upload da foto:", err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/${file.name}` });
  });
});

// var upload = multer({ storage: storage, limits: { fileSize: Infinity } });

router.post("/image", function (req, res) {
  const { file } = req.body;
  images
    .set(file.name)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("erro");
      res.sendStatus(500);
    });
});

router.delete("/", function (req, res) {
  const { id, name } = req.body;
  images
    .del(id)
    .then((data) => {})
    .catch((error) => {
      res.sendStatus(500);
    });
  findRemoveSync("/var/www/ji/frontend/public/", { files: name });
});

let nameFile = "";
let i = 1;
let fileType = "";
let sendFile = "";
const existsPromise = promisify(fs.exists);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/var/www/ji/frontend/public/");
  },
  filename: function (req, file, cb) {
    nameFile = file.originalname.slice(0, -4);
    fileType = file.originalname.slice(-4);
    console.log("nome do arquivo: " + nameFile + fileType);
    const path = "/var/www/ji/frontend/public/" + file.originalname;
    existsPromise(path).then((exists) => {
      if (exists) {
        while (exists == true) {
          const path2 =
            "/var/www/ji/frontend/public/" + nameFile + `(${i})` + fileType;
          if (path2) {
            i++;
            sendFile = nameFile + `(${i})` + fileType;
            exists = false;
            cb(null, sendFile);
            console.log("tem");
          } else {
            sendFile = nameFile + `(${i})` + fileType;
            console.log("nao existe");
            exists = false;
            cb(null, sendFile);
          }
        }
      } else {
        sendFile = file.originalname;
        console.log("nao tem");
        cb(null, sendFile);
      }
    });
  },
});

module.exports = router;
