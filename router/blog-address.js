var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', (req, res) =>{
    res.send('home');
})

router.get('/:address', (req, res) => {
    fs.readFile("./data/blog-main.json", "utf8", (err, data) => {
        if (err) {
          console.log("File read failed:", err);
          res.send("error");
          return;
        }
        console.log("File data:", data);
        res.send("dynamic working");
      });
})

module.exports = router;