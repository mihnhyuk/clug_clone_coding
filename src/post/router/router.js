var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getUser = require('../controller/getPost');
var getLike = require('../controller/getLike');

router.get('/:postID', getUser);
router.get('/:postID/like', getLike);


module.exports = router;


