require('total.js');

WEBSOCKETCLIENT(function(client) {
	client.connect('ws://127.0.0.1:8000/');
	client.on('message', function(message) {
		console.log(message);
	});
});