var User = require('./User');
var Bdd = require ('./Bdd');
var Serre = require ('./GestionSerre');
var http = require('http');
var fs = require('fs');

var serveur = http.createServer(function(req,res) {
	fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

serveur.listen(8080);