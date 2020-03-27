var http = require('http');
var fs = require('fs');
const GestionSerre = require("./GestionSerre");

function recupTemp() {
    Serre.TestValeurs();
    /*try {
        Serre.SetPlageHoraire();
        console.log('oui c bon')
    } catch (error) {
        console.log(error)
    }*/
    io.sockets.emit('ValHumidAir', Serre.captHumpidAir.GetValue());
    io.sockets.emit('valdate', Serre.captDate.GetValue());
    io.sockets.emit('valTemp', Serre.captTempInt.GetValue());
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
    setInterval(recupTemp, 60000);
});

serveur.listen(8080);