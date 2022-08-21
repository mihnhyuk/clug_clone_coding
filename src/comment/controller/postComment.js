var qs = require('querystring')
var append = require('../service/appendComment')
var time = require('../service/getTime')

var postComment = (request, response) => {
    var body = request.body
	var user = body.user;
	var content = body.content;
	var ret = {
		"comment-id" : (Math.floor(Math.random() * 100)).toString(10),
		"blogName" : request.params.address,
		"postID" : request.params.postID,
		"user-id" : user,
		"icon" : "img",
		"content" : content,
		"date" : time,
		"reply-num" : 0,
		"reply" : [],
		"like-num" : 0
	}
	append(ret)
	response.status(200).json(ret)
}

module.exports = postComment;