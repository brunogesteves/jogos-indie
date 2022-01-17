const express = require("express");
const router = express.Router();
const upload = require("multer")();

router.get('/', (req, res, next) => {
  res.json({message: "Tudo ok por aqui!"});
})

router.post('/send', upload.single('anexo'), (req, res, next) => { 
  console.log("nome: " + req.body.nome)
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    const anexo = req.file;
    require("./../nodemail")(email, nome, mensagem, anexo)
        .then(response => res.json(response))
        .catch(error => res.json(error));
})

module.exports = router;
