var mysql = require('mysql');
var express = require ('express');
var app = express();

module.export = class Bdd {

    constructor()
    {
        this.connection = mysql.createConnection({
            //propriété de connexion
            host : 'localhost',
            user: 'root',
            password: 'root',
            database: 'projetserre'
        });

        this.connection.connect(function(err) {
            //test de connexion , la console affiche l'erreur si la connexion est un échec sinon la console affiche 'Connected'
            if (err) throw err;
            console.log('Connected!');
        });
    }

    DBInsert(valTempInt, valHumidAir, valHumidSol)
    {
        connection.query("INSERT INTO `Datalog`(`Eventtype`, `Temp`, `HumiditeAir`, `HumiditeTerre`) VALUES ('SensorData', " + valTempInt + ", " + valHumidAir + ", " + valHumidSol + ")", function(err,result){
            //si la requete est incorrecte , on affiche un message l'erreur
            if (err) throw err;
                //affichage du resultat de la requete dans la console et sur le
                /*var json = JSON.stringify(result);
                console.log(json);
                resp.send(JSON.stringify(result));*/
        });
    }
}