var http = require('http');
var concat_stream = require('concat-stream')

var url = process.argv[2];

http.get(url, function(response){
  response.setEncoding('utf8');
  response.pipe(concat_stream(function(data) {
    console.log(data.length);
    console.log(data);
  }));
})
