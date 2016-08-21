var net = require('net');
var time = require('strftime');

var server = net.createServer((socket) => {
    socket.end(time('%F %R\n'))
});

server.listen(process.argv[2]);