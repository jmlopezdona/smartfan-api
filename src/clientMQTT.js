var MQTT = require("async-mqtt");

var clientMQTT = {
	sendMessage: sendMessage
}

function sendMessage(message) {
	let promise = new Promise(function(resolve, reject) {
		let client = MQTT.connect("mqtt://broker.hivemq.com");
		client.on("connect", sendMessage);
		async function sendMessage() {
			try {
				console.log('sending: ' + message);
				await client.publish("smartfan/456787654", message);
				await client.end();
				resolve();
			} catch (e){
				console.log(e.stack);
				reject();
			}
		}
	});
    return promise;
}

module.exports = clientMQTT;
