var fs = require('fs');

var getLike = (req, res) => {
	fs.readFile("./data/post.json", "utf8", (err, data) => {
		if (err) {
			console.log("File read failed:", err);
			res.send("error");
			return;
		}
        var params = req.params;
		var ret = JSON.parse(data)//[params.address.postID]//[params.postID];
		ret["likes"]++ ;
        console.log(ret);
        res.status(200).json(ret);
		var json = JSON.stringify(ret); //convert it back to json
		fs.writeFile('./data/post.json', json, 'utf8', (err) => {
			if (err){
				console.log("write error");
			}
			res.status(200);
		});
	})	
}
module.exports = getLike;