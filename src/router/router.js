var express = require('express');
var router = express.Router({mergeParams : true});
var userRouter = require("../user/router/router");
var postRouter = require("../post/router/router");
var commentRouter = require("../comment/router/router");

router.use('/:address', userRouter);
router.use('/:address/posts/', postRouter);
router.use('/:address/posts/{postID}/comment', commentRouter);

module.exports = router;