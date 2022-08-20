var express = require('express');
var router = express.Router();

router.get('/:address', userRouter)
router.get('/:address/post/', postUser)
router.get('/:address/post/{postID}/comment', commentRouter)

module.exports = router;