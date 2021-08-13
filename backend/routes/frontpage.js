const express = require("express");
const router = express.Router();
const frontpage = require("../model/frontpage");

router.get("/:slug", function (req, res) {
  frontpage
  .get(req.params.slug)
  .then((data) => {
      if(!data)  {
        res.json({data: false});     
      }else{  
        res.json({data: data[0]});
      }
    })
    .catch((error) => {
      res.sendStatus(500);
    });  
});


module.exports = router;