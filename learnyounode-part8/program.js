var bl = require('bl');
var http = require('http');

http.get(process.argv[2], (response) => {
    response.pipe(bl((err, data) => {
        if (err) console.error(err);
        else{
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }
    }))
    response.on('error', console.error);
}).on('error', console.error)