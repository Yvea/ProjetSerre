const fetch = require("../node_modules/node-fetch");

//classe qui crée le capteur
module.exports = class Capteur {
    constructor(IdCapteur)
    {
        this.ID = IdCapteur;
        this.GetValue();
    }
    //TODO commenter getvalue + principe
    GetValue() 
    {
        var that = this;

        var data = function(json) 
        {
            switch (that.ID)
            {
                case 'tempInt':
                    that.valeur = parseFloat(json.Monitor.S.S1.item1.value);
                    break;
                case 'tempExt':
                    that.valeur = parseFloat(json.Monitor.S.S1.item1.value);
                    break;
                case 'humidAir':
                    that.valeur = parseFloat(json.Monitor.S.S1.item2.value);
                    break;
                case 'humidSol':
                    let valeur1 = parseFloat(json.Monitor.S.S1.item1.value);
                    let valeur2 = parseFloat(json.Monitor.S.S1.item1.value);
                    let valeur3 = parseFloat(json.Monitor.S.S1.item1.value);
                    let valeurM = valeur1 + valeur2 + valeur3;
                    that.valeur = valeurM / 3;
                    break;
                case 'date':
                    that.valeur = json.Monitor.Time.Time;
                    break;
            }
        }
        //TODO sortir IP dans fichier de config
        fetch('http://91.169.11.60:16502/status.json?a=admin:admin', {
            method: 'GET'
        })
        .then(reponse => reponse.json())
        .then(json => data(json));

        return this.valeur;
    }
}