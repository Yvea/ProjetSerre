const fetch = require("../node_modules/node-fetch");

module.exports = class Capteur {
    
    
    //json.Monitor.S.S1.item1.value
    /*constructor(Jsonpath1,Jsonpath2,Jsonpath3)//constructeur HumiditéSol
    {
        this.value1 = Jsonpath1
        this.value2 = Jsonpath2
        this.value3 = Jsonpath3
        var moyen = this.MoyenneHumidSol();
    }*/

    constructor(IdCapteur)//constructeur general
    {
        this.ID = IdCapteur;

        if(this.ID == 'humidSol')
        {
            this.humid = this.MoyenneHumidSol(callback);
        }

        this.GetValue();
    }

    GetValue()
    {
        var that = this;

        var data = function(json) 
        {
            switch (that.ID)
            {
                case 'tempInt':
                    that.valeur = json.Monitor.S.S1.item1.value;
                    break;
                case 'tempExt':
                    that.valeur = json.Monitor.S.S1.item1.value;
                    break;
                case 'humidAir':
                    that.valeur = json.Monitor.S.S1.item2.value;
                    break;
                case 'humidSol1':
                    that.valeur = json.Monitor.S.S1.item1.value;
                    break;
                case 'humidSol2':
                    that.valeur = json.Monitor.S.S1.item1.value;
                    break;
                case 'humidSol3':
                    that.valeur = json.Monitor.S.S1.item1.value;
                    break;
            }
        }
        
        fetch('http://192.168.64.200/status.json?a=admin:admin', {
            method: 'GET'
        })
        .then(reponse => reponse.json())
        .then(json => data(json));

        return this.valeur;
    }

    MoyenneHumidSol(callback)
    {
        let CapteurH1 = this.GetValue('humidSol1',callback);
        let CapteurH2 = this.GetValue('humidSol2',callback);
        let CapteurH3 = this.GetValue('humidSol3',callback);
        var valueTot = 1 + 2 + 3;
        var valueMoy = valueTot / 3;
        return valueMoy;
    }
}