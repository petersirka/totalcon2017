NEWSCHEMA('User').make(function(schema) {

	schema.setQuery(function($) {
		var builder = NOSQL('users').find();
		builder.take(100);
		builder.callback($.callback);
	});

});