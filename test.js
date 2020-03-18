var http = require('http');
var fs = require('fs');
const Capteur = require("./Capteur");
const Serre = require("./GestionSerre");

function recupTemp() {
    let valeurt = capteurT.GetValue();
    let valeurh = capteurH.GetValue();
    io.sockets.emit('ValHumidAir', valeurh);
    io.sockets.emit('valTemp', valeurt);
}

var capteurT = new Capteur('tempInt');
var capteurH = new Capteur('humidSol');
//var Serre = new Serre();

var serveur = http.createServer(function(req,res) {
	fs.readFile('../ProjetSerre/index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

var io = require('socket.io').listen(serveur);

io.sockets.on('connection', function (socket) {
    setInterval(recupTemp, 3000);
});

serveur.listen(8080);