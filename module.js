
var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extname, callback){
  var extension =  '.' + extname;
  fs.readdir(dirname, function(err,data){
    if (err) {
      return callback(err, null)
    }else {
      var res= [];
      data.forEach(function (item){
        if (path.extname(item) == extension) {
          res.push(item);
        }
      });
        return callback(null, res);
    }

  });

}
