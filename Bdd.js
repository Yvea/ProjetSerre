class Bdd{
    
}

//variable
var express = require ('express');
var mysql = require('mysql');
var http = require('http');
var url = require('url');
var fs = require('fs');
var app = express();

var connection = mysql.createConnection({
    //propriété de connexion
    host : 'localhost',
    user: 'root',
    password: 'root',
    database: 'projetserre'
});

connection.connect(function(err) {
        //test de connexion , la console affiche l'erreur si la connexion est un échec sinon la console affiche 'Connected'
        if (err) throw err;
        console.log('Connected!');
});

app.get('/', function(req, resp){
    //requete SQL
    connection.query("SELECT nom FROM test_projet", function(err,result){
        //si la requete est incorrecte , on affiche un message l'erreur
        if (err) throw err;
            //affichage du resultat de la requete dans la console et sur le
            var json = JSON.stringify(result);
            console.log(result);
            resp.send(JSON.stringify(result));
    });
})
app.listen(1337);
