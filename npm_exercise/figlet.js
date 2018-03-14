var figlet = require('figlet');

var callFiglet = function () {

   return figlet.textSync('Broo!', {
        font: 'banner',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })

}

module.exports.callFiglet = callFiglet;
 
