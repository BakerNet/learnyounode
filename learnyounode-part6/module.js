const fs = require('fs');
const path = require('path');

module.exports = function (dirname, ext, callback){
   fs.readdir(dirname, (err, list) => {
       if (err) callback(err, null);
       else{
           var files = [];
           list.forEach(function(name) {
            if (path.extname(name) == '.' + ext){
                files.push(name);
            }
           })
           callback(null, files);
        }
   }) 
}