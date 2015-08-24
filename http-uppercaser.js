var map = require('through2-map');
var http = require('http');
http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {
     return chunk.toString().toUpperCase();
   })).pipe(res);

}).listen(process.argv[2]);
