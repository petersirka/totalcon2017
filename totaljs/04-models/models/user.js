NEWSCHEMA('Address').make(function(schema) {

	schema.define('street', 'String(30)', true);
	schema.define('zip', 'ZIP', true);
	schema.define('city', 'String(50)', true);

	schema.setSave(function($) {
		console.log('Address: save');
		$.success();
	});

});

NEWSCHEMA('User').make(function(schema) {

	schema.define('name', 'Capitalize(50)');
	schema.define('address', 'Address');

	schema.setSave(function($) {
		console.log('User: save');

		// $.model.address && $.model.address.$save();
		console.log($.model.$clean());

		// $.controller
		// $.user
		// $.query
		// $.options

		$.success();
	});
});