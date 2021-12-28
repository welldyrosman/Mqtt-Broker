var mqtt = require('mqtt');
var client = mqtt.connect('ws://192.168.3.184:1883');
var i=0;
try{
client.on('connect', function () {
        setInterval(function () {
            client.publish('msgnotif-31', 'Hallo subscriber'+i); // mengirim data
            console.log('mengirim data => [hallo subscriber]');
            i++;
        }, 3000);
    });
}catch{
    console.log("failed to connect")
}