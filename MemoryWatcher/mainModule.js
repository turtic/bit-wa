// const memoryInfoModule = require('./memoryInfoModule.js');
var figlet = require('figlet');
const { RegisterForAlerts } = require('./memoryInfoModule.js');
const { a } = require('./figletModule.js');


const someAlert = function (message) {
    // let x = message;

    figlet.text(message, {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
    
}

RegisterForAlerts(someAlert);