var http = require('http');
var fs = require('fs');
//const fetch = require("../node_modules/node-fetch");
const Capteur = require("./Capteur")

function recupTemp() {
    capteurT.GetValue('tempInt')
    io.sockets.emit('valTemp', capteurT.oui);
}

var capteurT = new Capteur('tempInt');

var serveur = http.createServer(function(req,res) {
	fs.readFile('../Node/index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

var io = require('socket.io').listen(serveur);

io.sockets.on('connection', function (socket) {
    setInterval(recupTemp, 3000);
});

serveur.listen(8080);