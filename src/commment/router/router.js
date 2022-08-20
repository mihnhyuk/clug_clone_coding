var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getComment = require('../commment/controller/getComment');
var postComment = require('../commment/controller/postComment');

router.get('/:address/post/{postID}/comment', getComment)
router.post('/:address/:id/comment', getComment)

module.exports = router;
