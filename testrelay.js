var http = require('http');
var fs = require('fs');
const fetch = require("node-fetch");

var serveur = http.createServer(function(req,res) {
	fs.readFile('web/JULO/index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

var io = require('socket.io').listen(serveur);

io.sockets.on('connection', function (socket) {
    socket.on('reqfenetre', function () {
        fetch('http://192.168.64.200/status.json?a=admin:admin&rof=1', {
        method: 'POST'
		})
		
		socket.emit('valfenetre');
    });	
});

serveur.listen(8080);