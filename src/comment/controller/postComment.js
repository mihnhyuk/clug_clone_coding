var qs = require('querystring')
var append = require('../sevice/appendComment')
var time = require('../sevice/getTime')

var postComment = (request, response) => {
    var body = request.body
	var user = body.user;
	var content = body.content;
	var ret = {
		"commentId" : (Math.floor(Math.random() * 100)).toString(10),
		"blogName" : request.params.address,
		"postID" : request.params.postID,
		"userId" : user,
		"icon" : "img",
		"content" : content,
		"date" : time,
		"replyNum" : 0,
		"reply" : [],
		"likeNum" : 0
	}
	append(ret)
	response.status(200).json(ret)
}

module.exports = postComment;