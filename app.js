var express = require('express');
var router = require('./src/router/router.js');

var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
 

app.listen(3000, function () {
    console.log('Connected port 3000');
})