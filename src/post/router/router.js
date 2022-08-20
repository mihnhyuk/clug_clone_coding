var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getUser = require('../controller/getPost');

router.get('/:postID', getUser)
// router.get('/:postID/like',)


module.exports = router;


