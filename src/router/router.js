var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var qs = require('querystring');
var time = require('../control/getTime');
var append = require('../control/appendComment');
var getUser = require('../control/getUser');

var router = express.Router();

router.get('/:address', getUser)

router.get('/:address/:id', (req, res) => {
    fs.readFile("./data/post.json", "utf8", (err, data) => {
        if (err) {
          console.log("File read failed:", err);
          res.send("error");
          return;
        }
		var params = req.params;
        var ret = JSON.parse(data)[params.address][params.id]
        res.status(200).json(ret);
      });
})

router.get('/:address/:id/comment', (req, res) => {
	fs.readFile("./data/comment.json", "utf8", (err, data) => {
		if (err) {
			console.log("File read failed:", err);
			res.send("error");
			return;
		  }
		var ret = JSON.parse(data);

		res.status(200).json(ret)
	})
})

router.post('/:address/:id/comment', (req, res) => {
	var body = ''
	request.on('data', function (data) {
		body += data;
		// Too much POST data, kill the connection!
		// 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
		if (body.length > 1e6)
			request.connection.destroy();
	});
	request.on('end', function () {
		var post = qs.parse(body);
		var user = post.user;
		var content = post.content;
		var ret = {
			"user-id" : user,
			"icon" : "img",
			"content" : content,
			"date" : time(),
			"reply-num" : 0,
			"reply" : ""
		}
		append(ret)
	});
})

router.get('/:address/:postID/comment/like/:comID', (req, res) => {
	fs.readFile("./data/comment.json", "utf8", (err, data) => {
		if (err) {
			
			console.log("File read failed:", err);
			res.send("error");
			return;
		}
		var ret = JSON.parse(data);
		var com = ret.data.find(comm => comm["comment-id"] === req.params.comID);
		com["like-num"]++ ;
		console.log(ret);
		var json = JSON.stringify(ret); //convert it back to json
		fs.writeFile('./data/comment.json', json, 'utf8', (err) => {
			if (err){
				console.log("write error");
			}
		});

	})
	res.send("comment like button");
})


module.exports = router;