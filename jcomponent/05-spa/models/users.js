NEWSCHEMA('User').make(function(schema) {

	schema.setQuery(function($) {

		var options = $.query ? $.query : $.options;
		var builder = NOSQL('users').find();

		builder.paginate(options.page || 0, options.limit || 30, 70);

		builder.callback(function(err, response, count) {
			var output = {};
			output.page = 1;
			output.limit = builder.$take;
			output.items = response;
			output.count = count;
			$.callback(output);
		});
	});

});