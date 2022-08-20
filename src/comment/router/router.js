var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getComment = require('../controller/getComment');
var postComment = require('../controller/postComment');
var commentLike= require('../controller/commentLike');

router.get('/', getComment);
router.post('/',postComment);
router.post('/like/{comment-id}', commentLike);
module.exports = router;
