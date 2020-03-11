const fetch = require("../node_modules/node-fetch");

class Capteur {
    
    
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
        if(IdCapteur == 'humidSol')
        {
            this.humid = this.MoyenneHumidSol(callback);
        }
        this.GetValue(IdCapteur)
    }

    GetValue(IdCapteur)
    {
        if (IdCapteur == 'tempInt')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => this.afficheValue(json));
        }

        if (IdCapteur == 'tempExt')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
            method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(IdCapteur, json.Monitor.S.S1.item1.value));
        }

        if (IdCapteur == 'humidAir')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(IdCapteur, json.Monitor.S.S1.item2.value));
        }

        if (IdCapteur == 'humidSol1')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(IdCapteur, json.Monitor.S.S1.item1.value));
        }

        if (IdCapteur == 'humidSol2')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(IdCapteur, json.Monitor.S.S1.item1.value));
        }

        if (IdCapteur == 'humidSol3')
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin', {
                method: 'GET'
            })
            .then(reponse => reponse.json())
            .then(json => callback(IdCapteur, json.Monitor.S.S1.item1.value));
        }

    }
    
    afficheValue(data){
        //data = this.GetValue(Jsonpath)
        //io.sockets.emit(IdReq, data);
        this.oui = data.Monitor.S.S1.item1.value
    }

    MoyenneHumidSol(callback)
    {
        let CapteurH1 = this.GetValue('humidSol1',callback);
        let CapteurH2 = this.GetValue('humidSol2',callback);
        let CapteurH3 = this.GetValue('humidSol3',callback);
        var valueTot = 1 + 2 + 3;
        var valueMoy = valueTot / 3
        return valueMoy
    }
}

module.exports = Capteur