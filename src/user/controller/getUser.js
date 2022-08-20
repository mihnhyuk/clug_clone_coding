var fs = require('fs');

var getUser = (req, res) => {
    fs.readFile("./data/user.json", "utf8", (err, data1) => {
        if (err) {
          console.log("File read failed:", err);
          res.send("error");
          return;
        }
        fs.readFile("./data/post.json", "utf8", (err, data2) => {
			if (err) {
				console.log("File read failed:", err);
				res.send("error");
				return;
			}
			var ret = JSON.parse(data1);
			var post = JSON.parse(data2);
			ret.postList = post[ret.userAddress]
			res.status(200).json(ret);
		})
    });
}

module.exports = getUser;