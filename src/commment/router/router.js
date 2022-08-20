var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getComment = require('../commment/controller/getComment');
var postComment = require('../commment/controller/postComment');

router.get('/', getComment)
router.post('/',postComment)

module.exports = router;
