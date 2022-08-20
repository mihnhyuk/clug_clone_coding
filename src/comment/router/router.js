var express = require('express');
const router = express.Router({ mergeParams: true }); 
var cont = require('../controller/index')

router.get('/', cont.getComment);
router.post('/',cont.postComment);
router.get('/like/{comment-id}', cont.commentLike);

module.exports = router;
