var fs = require('fs');

var getPost = (req,res) =>{
	fs.readFile("./data/post.json", "utf8", (err, data) => {
        if (err) {
          console.log("File read failed:", err);
          res.send("error");
          return;
        }
		var params = req.params;
        var ret = JSON.parse(data)[params.address][params.id]
        res.status(200).json(ret);
      });
}

module.exports = getPost;