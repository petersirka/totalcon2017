exports.install = function() {
	ROUTE('/', logged, ['authorize']);
	ROUTE('/', unlogged, ['unauthorize']);
	ROUTE('/all/', all);
};

function logged() {
	this.json(this.user);
}

function unlogged() {
	this.plain('You need to sign-in.');
}

function all() {
	this.plain('all: ' + (this.user ? 'authorized' : 'unauthorized'));
}