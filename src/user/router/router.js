var express = require('express');

var router = express.Router();

router.get('/:address', getUser)
router.get('/:address/:id', getPost)
router.get('/:address/:id/comment', getComment)
router.post('/:address/:id/comment', postComment)
router.get('/:address/:postID/comment/like/:comID', commentLike)


module.exports = router;