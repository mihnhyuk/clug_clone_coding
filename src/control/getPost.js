var fs = require('fs');

var getPost = (callback) =>{
	fs.readFile('./data/post.json', 'utf8', (err, data) => {
		if (err) {
			console.log("File read failed:", err);
			return;
		}
		return JSON.parse(data);
	});
}

module.exports = getPost;