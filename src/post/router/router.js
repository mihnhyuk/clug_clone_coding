var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getUser = require('../user/post/getPost');

router.get('/:postID', getUser)
router.get('/:postID/like',)


module.exports = router;


