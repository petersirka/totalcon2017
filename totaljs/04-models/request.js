require('total.js');

/*
RESTBuilder.make(function(builder) {
	builder.url('http://127.0.0.1:8000/api/contact/');
	builder.json({ firstname: 'peter', lastname: 'sirka', email: 'petersirka@gmail.com', phone: 'ZLA HODNOTA', fieldnavyse: 'DKASDJalskdjasldj' });
	builder.exec(function(err, output, response) {
		console.log(output, response.status);
	});
});
*/

RESTBuilder.make(function(builder) {
	builder.url('http://127.0.0.1:8000/api/users/');

	// var data = { name: 'peter', address: { street: 'Viestova 28', zip: '97401', city: 'Banská Bystrica' }};
	var data = { name: 'Peter' };

	// var data = { name: 'Peter', address: [{}] };

	builder.json(data);
	builder.exec(function(err, output, response) {
		console.log(output, response.status);
	});
});
