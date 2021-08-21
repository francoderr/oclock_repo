var http = require("http");
var dt = require('./myFirstModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('super man has said the date and time is: ' + dt.myDateTime());
}).listen(8080);
