var fs = require('fs');

var getLike = (req, res) => {
	fs.readFile("./data/post.json", "utf8", (err, data) => {
		if (err) {
			
			console.log("File read failed:", err);
			res.send("error");
			return;
		}
		var ret = JSON.parse(data);
		var com = ret.data.find(comm => comm[param.address] === req.params.comID);
		com["likes"]++ ;
		console.log(ret);
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