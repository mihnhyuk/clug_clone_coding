var fs = require('fs');

var getPost = (req,res) =>{
	fs.readFile("./data/post.json", "utf8", (err, data) => {
        if (err) {
          console.log("File read failed:", err);
          res.send("error");
          return ;
        }
        var ret = JSON.parse(data)[req.params.address][req.params.postID]
        res.status(200).json(ret);
      });
}

module.exports = getPost;