var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
    if (req.method == 'GET'){
        var reqUrl = url.parse(req.url, true);
        var date = new Date(reqUrl.query['iso']);
        var result;
        //Process request based on provided URL
        if(reqUrl.pathname == '/api/parsetime'){
            result = JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()});
        }else if(reqUrl.pathname == '/api/unixtime'){
            result = JSON.stringify({unixtime: date.getTime()});
        }
        //Check if request was processed into result.  Return JSON
        if (result){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(result);
        } else{
            res.writeHead(406);
            res.end();
        }
    }
});

server.listen(process.argv[2]);