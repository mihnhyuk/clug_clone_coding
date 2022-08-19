var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var qs = require('querystring');
var time = require('../control/getTime');
var append = require('../control/appendComment');
var getUser = require('../control/getUser');
var getPost = require('../control/getPost');
var getComment = require('../control/getComment');
var postComment = require('../control/postComment');

var router = express.Router();

router.get('/:address', getUser)
router.get('/:address/:id', getPost)
router.get('/:address/:id/comment', getComment)
router.post('/:address/:id/comment', postComment)


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