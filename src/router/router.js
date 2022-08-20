var express = require('express');
var router = express.Router();
var userRouter = require("../user/router/router");
var postRouter = require("../user/post/router");
var commentRouter = require("../user/comment/router");
router.get('/:address', userRouter);
router.get('/:address/post/', postRouter);
router.get('/:address/post/{postID}/comment', commentRouter);

module.exports = router;