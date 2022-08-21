var fs = require('fs');

var commentLike = (req, res) => {
	fs.readFile("./data/comment.json", "utf8", (err, data) => {
		if (err) {
			
			console.log("File read failed:", err);
			res.send("error");
			return;
		}
		var ret = JSON.parse(data);
		var com = ret.data.find(comm => comm["comment-id"] === req.params.commentID);
		com["like-num"]++ ;
		var json = JSON.stringify(ret); //convert it back to json
		fs.writeFile('./data/comment.json', json, 'utf8', (err) => {
			if (err){
				console.log("write error");
			}
			res.status(200).json(ret);
		});
	})	
}


module.exports = commentLike;