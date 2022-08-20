var express = require('express');
var router = express.Router();
var userRouter = require("../user/router/router");
var postRouter = require("../user/post/router");
var commentRouter = require("../user/comment/router");
router.use('/:address', userRouter);
router.use('/:address/post/', postRouter);
router.use('/:address/post/{postID}/comment', commentRouter);

module.exports = router;