var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    var lines = data.split('\n');
    console.log(lines.length - 1);
});

