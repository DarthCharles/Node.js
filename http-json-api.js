var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true);
  var pathname = urlObj.pathname;
  var time = urlObj.query.iso;
  var result;

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  }  else if (/^\/api\/unixtime/.test(req.url)) {
    result = getUnixTime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(404);
    res.end();
  }

}).listen(process.argv[2]);

function parsetime(time){
  var date = new Date(Date.parse(time));

  return  {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }

}
function getUnixTime(time){
  return   {
    unixtime: Date.parse(time)
  }

}
