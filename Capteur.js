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

        var data = function(json) {
            that.valeur = json.Monitor.S.S1.item1.value;
        }

        if (this.ID == 'tempInt')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => data(json));
        }

        if (this.ID == 'tempExt')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
            method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(this.ID, json.Monitor.S.S1.item1.value));
        }

        if (this.ID == 'humidAir')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(this.ID, json.Monitor.S.S1.item2.value));
        }

        if (this.ID == 'humidSol1')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(this.ID, json.Monitor.S.S1.item1.value));
        }

        if (this.ID == 'humidSol2')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(this.ID, json.Monitor.S.S1.item1.value));
        }

        if (this.ID == 'humidSol3')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(this.ID, json.Monitor.S.S1.item1.value));
        }

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