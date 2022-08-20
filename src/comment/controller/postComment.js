var qs = require('querystring')
var append = require('./appendComment')
var time = require('./getTime')



var postComment = (request, response) => {
    var body = request.body
	var user = body.user;
	var content = body.content;
	var ret = {
		"comment-id" : (Math.floor(Math.random() * 100)).toString(10),
		"user-id" : user,
		"icon" : "img",
		"content" : content,
		"date" : time,
		"reply-num" : 0,
		"reply" : [],
		"like-num" : 0
	}
	append(ret)
	response.send("hello1")
}

module.exports = postComment;