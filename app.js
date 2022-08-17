var express = require('express');
var blog_address = require('./router/blog-address.js');
var app = express();

app.use('./{blog-address}', blog_address);

app.listen(3000, function () {
    console.log('Connected port 3000');
})