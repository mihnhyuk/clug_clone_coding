var express = require('express');
var router = express.Router({ mergeParams: true }); 
var cont = require('../controller/index');


router.get('/:postID', cont.getPost)
// router.get('/:postID/like',)


module.exports = router;


