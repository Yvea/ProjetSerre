const Capteur = require("./Capteur");
const Actionneur = require("./Actionneur");

module.exports = class GestionSerre {

    constructor()
    {
        this.captTempInt = new Capteur('tempInt');

        this.act
    }

    TestValeurs()
    {
        var tempInt = this.capteurTempInt.GetValue('tempInt')
        if(tempInt > 25)
        {

        }
    }
    
}