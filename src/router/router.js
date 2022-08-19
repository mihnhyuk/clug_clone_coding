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
	res.send("comment like button");
})

router.get('/:address/:id/comment/like/list', (req, res) => {
	res.send("comment like list");
})

module.exports = router;