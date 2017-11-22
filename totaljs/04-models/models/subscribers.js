NEWSCHEMA('Subscriber').make(function(schema) {

	schema.define('email', 'Email', true);

	schema.setQuery(function($) {
		var sql = DB($.error);

		sql.select('items', 'tbl_subscriber').make(function(builder) {
			builder.where('removed', false);
			builder.sort('datecreated', true);
		});

		sql.exec($.callback, 'items');
	});

	schema.setSave(function($) {

		var sql = DB($.error);

		sql.exists('exists', 'tbl_subscriber').make(function(builder) {
			builder.where('email', $.model.email);
			builder.first();
		});

		sql.validate('exists', 'error-subscriber-exists', true);

		sql.insert('tbl_subscriber').make(function(builder) {
			builder.set($.model);
			builder.set('id', UID());
			builder.set('created', F.datetime);
			builder.set('ip', $.controller.ip);
			builder.set('language', $.controller.language);
		});

		sql.exec(() => $.success());
	});

});