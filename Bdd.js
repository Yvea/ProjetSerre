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
    DBInsert(Eventtype ,valTempInt, valHumidAir, valHumidSol,EventValue, ID_user)
    {
        this.connection.query("INSERT INTO `Datalog`(Eventtype`, `Temp`,`HumiditeAir`, `HumiditeTerre`,`EventValue`,`ID_user`) VALUES ("+ Eventtype +", " + valTempInt + ", " + valHumidAir + ", " + valHumidSol + ","+ EventValue +","+ ID_user +")", function(err,result){
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
    //fonction rechercher et affichage de la table datalog
    DBQueryregu()
    {
        this.connection.query("select * from Datalog ", function(err,result){
            //si la requete est incorrecte , on affiche un message l'erreur
            if (err) throw err;
            //si pas d'erreur on retourne le resultat
            return result ;
        });
    }
    //fonction recherche et affichage des users
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