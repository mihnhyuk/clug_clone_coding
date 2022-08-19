var fs = require('fs');

var getComment = (callback) =>{
	fs.readFile('./data/comment.json', 'utf8', (err, data) => {
		if (err) {
			console.log("File read failed:", err);
			return ;
		}
		return JSON.parse(data);
	});
}

module.exports = getComment;