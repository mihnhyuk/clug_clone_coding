var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getComment = require('../commment/controller/getComment');
var postComment = require('../commment/controller/postComment');

router.get('/', commentRouter)
router.post('/', commentRouter)

module.exports = router;
