const { response } = require('express');
var fs = require('fs');

var appendComment = (toAdd) =>{
	fs.readFile('./data/comment.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		}
		else {
		var obj = JSON.parse(data); //now it an object
		obj.data.push(toAdd);  //add some data
		var json = JSON.stringify(obj); //convert it back to json
		fs.writeFile('./data/comment.json', json, 'utf8', (err) => {
			if (err){
				console.log("write error");
			}
		})
	}});
}

module.exports = appendComment