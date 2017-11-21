exports.install = function() {
	ROUTE('/api/users/', ['*User --> query']);
};