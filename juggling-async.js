var http = require('http');
var concat_stream = require('concat-stream')

var urls = [];
for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

//console.log(url);
var res = [];
var rescont = 0;
urls.forEach(function(url, i){
  http.get(url, function(response){
    response.setEncoding('utf8');
    response.pipe(concat_stream(function(data) {
      //console.log(data.length);
      res[i] = data;
    rescont += 1;
    if (rescont === urls.length) {
      res.forEach(function (data) {
        console.log(data);
      })
    }
    }));
  })
});
