COMPONENT('page', function(self, config) {

	var type = 0;

	self.readonly();

	self.hide = function() {
		self.set('');
	};

	self.setter = function(value) {

		if (type === 1)
			return;

		var is = config.if == value;

		if (type === 2 || !is) {
			self.tclass('hidden', !is);
			is && config.reload && EXEC(config.reload);
			self.release(!is);
			EMIT('resize');
			return;
		}

		SETTER('loading', 'show');
		type = 1;

		self.import(config.url, function() {
			type = 2;

			if (config.init) {
				var fn = GET(config.init || '');
				typeof(fn) === 'function' && fn(self);
			}

			config.reload && EXEC(config.reload);
			config.default && DEFAULT(config.default, true);

			setTimeout(function() {
				self.tclass('hidden', !is);
				EMIT('resize');
			}, 200);

			SETTER('loading', 'hide', 1000);
		}, false);
	};
});