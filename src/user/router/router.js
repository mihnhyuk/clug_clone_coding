var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getUser = require('../user/controller/getUser');

router.get('/:address', getUser)

module.exports = router;


