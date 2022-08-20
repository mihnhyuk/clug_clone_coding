var express = require('express');
const router = express.Router({ mergeParams: true }); 
var getUser = require('../controller/getUser');

router.get('/', getUser)

module.exports = router;


