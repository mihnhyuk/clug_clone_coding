var fs = require('fs');

var getComment = (req,res) =>{
	fs.readFile("./data/comment.json", "utf8", (err, data) => {
		if (err) {
			console.log("File read failed:", err);
			res.send("error");
			return;
		  }
		var ret = JSON.parse(data);

		res.status(200).json(ret)
	})
}

module.exports = getComment;