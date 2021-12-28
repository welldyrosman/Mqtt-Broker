var mqtt = require('mqtt')
var client = mqtt.connect('ws://192.168.3.184:1883');



client.on('connect', function () {
  //  client.subscribe('myTopic')
    client.subscribe('msgnotif-1')
    
})
client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context)
})