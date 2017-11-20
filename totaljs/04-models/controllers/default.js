exports.install = function() {
	ROUTE('/api/contact/', json_contact, ['*Contact', 'post']);
	// ROUTE('/api/contact/', ['*Contact --> save', 'post']);
	ROUTE('/api/users/', ['*User --> save', 'post']);
};

function json_contact() {
	var self = this;
	self.$save(self.callback());
	// self.$save((err, response) => self.json(response));
	// self.$async(self.callback(), 1).$save().$workflow('send').$workflow('newsletter');
	// self.$save(self.callback('viewname'));
	// self.$save((err, response) => self.view('viewname', response));
}