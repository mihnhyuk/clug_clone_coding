var fs = require('fs');
var bodyParser = require('body-parser');
var qs = require('querystring');
var append = require('../control/appendComment');
var time = require('../control/getTime');
var postComment = (request, response) => {
    var body = ''
	request.on('data', function (data) {
		body += data;
		// Too much POST data, kill the connection!
		// 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
		if (body.length > 1e6)
			request.connection.destroy();
	});
	request.on('end', function () {
		var post = qs.parse(body);
		var user = post.user;
		var content = post.content;
		var ret = {
			"user-id" : user,
			"icon" : "img",
			"content" : content,
			"date" : time(),
			"reply-num" : 0,
			"reply" : ""
		}
		append(ret)
	});
}

module.exports = postComment;