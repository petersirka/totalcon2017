exports.install = function() {
	ROUTE('/', view_index);
};

function view_index() {
	var self = this;
	self.repository.date = new Date();

	var model = {};
	model.name = 'Model do view';
	model.items = [1, 2, 3, 4, 5];

/*
	self.memorize('index', '2 minutes', function() {
		console.log('view');
		self.view('index', model);
	});
*/

	self.view('index', model);
}