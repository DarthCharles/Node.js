var fs = require('fs');
var path = require('path');

//console.log(process.argv[2]);
fs.readdir(process.argv[2], function (err, data){
	var extension =  '.' + process.argv[3];

	data.forEach(function (item){
		if (path.extname(item) == extension) {
			console.log(item);
		}
	});


 });
