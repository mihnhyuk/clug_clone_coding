var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getUser = require('../user/post/getPost');

router.get('/', postRouter)

module.exports = router;


