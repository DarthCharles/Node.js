var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
  //console.log(new Date());
  socket.end(getDate()+"\n");


})
server.listen(process.argv[2]);

//"YYYY-MM-DD hh:mm"
function getDate() {
  var date = new Date();
  var day = formatNum(date.getDate());
  var month = formatNum(date.getMonth() + 1);
  var year = date.getFullYear();
  var hours = formatNum(date.getHours());
  var minutes =  formatNum(date.getMinutes());

return [year,month,day].join('-') + ' ' + [hours,minutes].join(':')
}

function formatNum(number){

  return number < 10 ? "0" + number : number

}
