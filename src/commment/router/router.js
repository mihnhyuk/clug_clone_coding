var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getComment = require('../commment/controller/getComment');
var postComment = require('../commment/controller/postComment');
var commentLike= require('../commment/controller/commentLike');

router.get('/', getComment);
router.post('/',postComment);
router.post('/like/{comment-id}', commentLike);
module.exports = router;
