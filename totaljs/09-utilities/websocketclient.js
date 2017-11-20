require('total.js');

WEBSOCKETCLIENT(function(client) {

	client.options.type = 'text';

	client.connect('ws://www.gpslocalization.com/PSIRKA/?listener=1');

	client.on('open', function() {
		console.log('OPEN');
	});

	client.on('close', function() {
		console.log('CLOSE');
	});

	client.on('message', function(message) {
		console.log('MESSAGE', message);
	});

});