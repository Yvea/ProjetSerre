var http = require('http');
var fs = require('fs');
const GestionSerre = require("./GestionSerre");

function recupTemp() {
    Serre.TestValeurs();
    //io.sockets.emit('ValHumidAir', valeurh);
    //io.sockets.emit('valTemp', valeurt);
}

var Serre = new GestionSerre();

var serveur = http.createServer(function(req,res) {
	fs.readFile('../ProjetSerre/index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

var io = require('socket.io').listen(serveur);

io.sockets.on('connection', function (socket) {
    setInterval(recupTemp, 5000);
});

serveur.listen(8080);