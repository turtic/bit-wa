// Added in: v0.3.3
// Returns: <integer>
// The os.freemem() method returns the amount of free system memory in bytes as an integer.
const os = require('os');

let currentCallback;

setInterval(function () {
    GBfreemem = os.freemem / (1024 * 1024 * 1024);

    if (GBfreemem < 1.90) {

        currentCallback('Low memory');
    } else {
        currentCallback('All good');
    }

    console.log(GBfreemem);
}, 1000);


const RegisterForAlerts = function (f) {
    currentCallback = f;
}

module.exports.RegisterForAlerts = RegisterForAlerts;


console.log("pre");

for (let index = 0; index < array.length; index++) {
    console.log(index);
    
}

console.log("posle");
console.log("posle");
console.log("posle");
console.log("posle");
console.log("posle");
console.log("posle");
console.log("posle");