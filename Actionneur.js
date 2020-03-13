const fetch = require("../node_modules/node-fetch");

module.exports = class Actionneur {
    
    constructor(IDActionneur)
    {
        this.ID = IDActionneur;

    }

    commanderChauffage(etat)
    {
        if(etat == true)
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin&ron=1', {
                method: 'POST'
	        })
        }
        else
        {
            fetch('http://192.168.64.200/status.json?a=admin:admin&rof=1', {
                method: 'POST'
            })
        }
    }

    GetEtat(this.ID){
        
    }
		    
}