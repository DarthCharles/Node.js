var fs = require('fs');
//console.log(process.argv[2]);
fs.readdir(process.argv[2], function (err, data){
	var extension =  process.argv[3];

	for (var i = 0; i < data.length; i++) {
		if (data[i].split('.')[1] == extension) {
			console.log(data[i]);
		}

	}

 });