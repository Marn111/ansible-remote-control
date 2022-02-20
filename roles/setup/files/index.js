var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Ansible Remote Control has been successful!");
});
server.listen(3000);