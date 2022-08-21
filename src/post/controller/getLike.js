var fs = require('fs');

var getLike = (req, res) => {
	fs.readFile("./data/post.json", "utf8", (err, data) => {
		if (err) {
			console.log("File read failed:", err);
			res.send("error");
			return;
		}
<<<<<<< HEAD
    
		var ret = JSON.parse(data);
=======
        var params = req.params;
		var ret = JSON.parse(data)
>>>>>>> fd14b38503a1fe036c1c0b2e75bdfd03727d163c
		ret[req.params.address][req.params.postID]["likes"]++ ;
        console.log(ret);
		var json = JSON.stringify(ret); //convert it back to json
		fs.writeFile('./data/post.json', json, 'utf8', (err) => {
			if (err){
				console.log("write error");
			}
			res.status(200).json(ret);
		});
	})	
}
module.exports = getLike;

