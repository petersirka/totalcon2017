exports.install = function() {
	F.route('/', plain_homepage);
	F.route('/info/', plain_info);
	F.route('/cache/', plain_cache);
	F.route('/sum/', plain_sum);
};

function plain_homepage() {
	console.log('Responded: ' + F.id);
	this.plain('OK');
}

function plain_cache() {
	console.log('Responded: ' + F.id);
	F.cache.add('kluc', 'hodnota z inštancie ' + F.id, '5 minutes');
	this.empty();
}

function plain_info() {
	F.cluster.emit('cojevcache');
	this.empty();
}

function plain_sum() {
	var self = this;
	F.cluster.request('sum', { value: 100 }, function(err, value) {
		self.json(value);
	});
}

ON('cojevcache', function() {
	console.log(F.id, F.cache.items);
});

F.cluster.response('sum', function(value, next, senderId) {
	value.value = U.random(0, 1000);
	value.id = F.id;
	next(value);
});