var lslib = require('./module');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, (err, files) => {
    if (err) console.error(err);
    files.forEach(function(name){
        console.log(name);
    })
});