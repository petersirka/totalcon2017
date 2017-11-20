exports.install = function() {
	ROUTE('/');
	WEBSOCKET('/', websocket, ['json']);
};

function websocket() {
	var self = this;

	self.on('open', function(client) {
		// Niekto sa prihlásil
	});

	self.on('close', function(client) {
		// Niekto sa odhlásil
	});

	self.on('message', function(client, message) {

		// Niekto poslal správu
		console.log('message', message);

		// Pošleme ju ďalej všetkým clientom
		client.send(message);

	});

	setInterval(function() {
		self.send({ now: new Date() });
	}, 1000);

}