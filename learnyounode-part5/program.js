var fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    if (err) return console.errror(err);
    list.forEach(function(name) {
        if (path.extname(name) == '.' + process.argv[3]) console.log(name);
    })
});