var express = require('express');
var fs = require('fs');
var blog_address = require('./router/blog-address.js');
var app = express();

//app.use('/', blog_address);

app.get('/', (req, res) =>{
    res.send('home');
})

app.get('/:address', (req, res) => {
    fs.readFile("./data/blog-main.json", "utf8", (err, data1) => {
        if (err) {
          console.log("File read failed:", err);
          res.send("error");
          return;
        }
        fs.readFile("./data/post-list.json", "utf8", (err, data2) => {
			if (err) {
				console.log("File read failed:", err);
				res.send("error");
				return;
			}
			var ret = JSON.parse(data1);
			var post = JSON.parse(data2);
			ret.postList = post[ret.userAddress]
			res.status(200).json(ret);
		})
      });
})

app.listen(3000, function () {
    console.log('Connected port 3000');
})