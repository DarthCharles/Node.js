var filedir = process.argv[2];
var ext = process.argv[3];

var mymodule = require('./module');

mymodule(filedir, ext, function (err, data) {
      data.forEach(function(items) {
        console.log(items);
      });
});
