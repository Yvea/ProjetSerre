const Capteur = require("./Capteur");
const Actionneur = require("./Actionneur");
const Bdd = require("./Bdd");

module.exports = class GestionSerre {

    constructor()
    {
        this.captTempInt = new Capteur('tempInt');
        this.captTempExt = new Capteur('tempExt');
        this.captHumpidAir = new Capteur('humidAir');
        this.captHumpidSol = new Capteur('humidSol');
        this.captDate = new Capteur('date');

        this.Vasistas = new Actionneur('Vasistas');
        this.Chauffage = new Actionneur('Chauffage');
        this.Arrosage = new Actionneur('Arrosage');
        this.Brumisation = new Actionneur('Brumisation');

        this.BDD = new Bdd();
    }

    TestValeurs()
    {
        var tempInt = this.captTempInt.GetValue();
        var tempExt = this.captTempExt.GetValue();
        var humidAir = this.captHumpidAir.GetValue();
        var humidSol = this.captHumpidSol.GetValue();

        this.BDD.DBInsert(tempInt, tempExt, humidAir, humidSol);

        var humidCrit = 10;
        var humidNeed = 50;

        if(tempInt >= 25) //Ouverture vasistas
        {
            this.Vasistas.Commander(true);
        }
        else if(tempExt > tempInt)
        {  
            if(tempInt <= 10)
                this.Vasistas.Commander(true);
            else
                this.Vasistas.Commander(false);
        }
        else if(humidAir >= 85)
        {
            if(tempInt > 10)
                this.Vasistas.Commander(true);
            else
                this.Vasistas.Commander(false);
        }
        else
        {
            this.Vasistas.Commander(false);
        }

        if(tempInt <= 1) //Chauffage
        {
            this.Chauffage.Commander(true);
        }
        else if(tempInt >= 25)
        {
            this.Chauffage.Commander(false);
        }

        if(tempInt >= 25) //Brumisation
        {
            this.Brumisation.Commander(true);
        }
        else if(humidAir <= 50)
        {
            if(tempInt > 5)
            {
                this.Brumisation.Commander(true);
            }
            else
            {
                this.Brumisation.Commander(false);
            }
        }
        else
        {
            this.Brumisation.Commander(false);
        }
        
        if (humidSol < humidCrit) //Arrosage
        {
            this.Arrosage.Commander(true);
        }
        else if(humidSol > humidNeed)
        {
            this.Arrosage.Commander(false);
        }
        else
        {
            this.Arrosage.Commander(true);
        }
    }

    //SetPlageHoraire()
    
}