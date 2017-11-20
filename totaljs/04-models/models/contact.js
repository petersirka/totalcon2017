NEWSCHEMA('Contact').make(function(schema) {

	schema.define('firstname', 'Capitalize(30)', true);
	schema.define('lastname', 'Capitalize(30)', true);
	schema.define('email', 'Email', true);
	schema.define('phone', 'Phone');
	schema.define('body', 'String(500)');

	schema.setSave(function($) {

		console.log('contact save', $.model.$clean());

		$.model.id = UID();
		$.model.datecreated = F.datetime;
		$.model.language = $.language;
		$.model.ip = $.ip;

		// Save to DB
		NOSQL('contact').insert($.model);

		// Respond
		$.success();
	});

	schema.addWorkflow('send', function($) {

		console.log('contact send');

		// Wait 2 seconds
		setTimeout(function() {
			$.success();
		}, 2000);
	});

	schema.addWorkflow('newsletter', function($) {

		console.log('contact newsletter');

		var data = {};
		data.email = $.model.email;
		data.datecreated = F.datetime;
		NOSQL('subscribers').insert(data, data).where('email', data.email);

		$.callback({ SOME: 'value' });
	});
});