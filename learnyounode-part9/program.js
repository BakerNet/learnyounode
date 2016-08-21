var bl = require('bl');
var http = require('http');

var urls = process.argv.slice(2);
var count = 0;

var results = [];

urls.forEach((url, index) => {
    http.get(url, (response) => {
        response.pipe(bl((err, data) => {
            if (err) return console.error(err);
            results[index] = data.toString();

            count++;
            if (count == 3){
                results.forEach((line) => {
                    console.log(line);
                })
            }
        }))
    })
})