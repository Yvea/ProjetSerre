const fetch = require("../node_modules/node-fetch");

module.exports = class Actionneur {
    
    constructor(IDActionneur)
    {
        this.ID = IDActionneur;
    }

    data() 
        {
            var that = this;

            switch (that.ID)
            {
                case 'Chauffage':
                    that.nbrelay = '1';
                    break;
                case 'Vasistas':
                    that.nbrelay = '2';
                    break;
                case 'Arrosage':
                    that.nbrelay = '4';
                    break;
                case 'Brumisation':
                    that.nbrelay = '8';
                    break;
            }
        }

    Commander(etat)
    {
        this.data(this.ID)
        
        if(etat == true)
        {
            fetch('http://91.169.11.60:16502/status.json?a=admin:admin&ron=' + this.nbrelay + '', {
                method: 'POST'
	        })
        }
        else
        {
            fetch('http://91.169.11.60:16502/status.json?a=admin:admin&rof=' + this.nbrelay + '', {
                method: 'POST'
            })
        }
    }
		    
}