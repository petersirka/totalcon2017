/*
ErrorBuilder.addTransform('new', function(isResponse) {
	this.status = 444;
	var data = { status: this.status, error: 'Some error' };
	return isResponse ? JSON.stringify(data) : data;
}, true);
*/