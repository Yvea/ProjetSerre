var mysql = require('../node_modules/mysql');

module.exports = class Bdd {

    constructor()
    {
        this.connection = mysql.createConnection({
            host : 'localhost',
            user: 'root',
            password: 'root',
            database: 'projetserre'
        });

        this.connection.connect(function(err) {
            if (err) throw err;
            console.log('Connecté à la BDD !');
        });
    }
    
    //TODO expliquer BDinsert
    DBInsert(valTempInt, valTempExt, valHumidAir, valHumidSol)
    {
        this.connection.query("INSERT INTO `Datalog`(`Eventtype`, `TempInt`, `TempExt`, `HumiditeAir`, `HumiditeTerre`) VALUES ('SensorData', " + valTempInt + ", " + valTempExt + ", " + valHumidAir + ", " + valHumidSol + ")", function(err,result){
            //si la requete est incorrecte , on affiche un message l'erreur
            if (err) throw err;
                //affichage du resultat de la requete dans la console et sur le
        });
    }
    //fonction recherche plage horaire
    DBQueryHoraire()
    {
        this.connection.query("select * from PlageHoraire ", function(err,result){
            //si la requete est incorrecte , on affiche un message l'erreur
            if (err) throw err;
            //si pas d'erreur on retourne le resultat
            return result ;
        });
    }
    DBQueryregu()
    {
        this.connection.query("select * from Datalog ", function(err,result){
            //si la requete est incorrecte , on affiche un message l'erreur
            if (err) throw err;
            //si pas d'erreur on retourne le resultat
            return result ;
        });
    }
    DBQueryUser()
    {
        this.connection.query("select Nom,Login,Email from User ", function(err,result){
            //si la requete est incorrecte , on affiche un message l'erreur
            if (err) throw err;
            //si pas d'erreur on retourne le resultat
            return result ;
        });
    }
}