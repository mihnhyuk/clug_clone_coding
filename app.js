var express = require('express');
var router = require('./src/router/router.js');

var app = express();

app.use('/', router);

app.get('/', (req, res) =>{
    res.send('home');
})

app.listen(3000, function () {
    console.log('Connected port 3000');
})