// const COOKIE = 'usr';
// const ONLINE = {};

AUTH(function(req, res, flags, callback) {
	// callback(false);
	callback(true, { id: 100, user: 'Peter' });
});

/*
AUTH(function(req, res, flags, callback) {

	var id = req.cookie(COOKIE);
	var user = ONLINE[id];

	if (user) {
		console.log('FROM CACHE');
		user.expire = F.datetime.add('5 minutes');
		callback(true, user);
		return;
	}

	// req.headers['x-token'];

	if (!req.query.login) {
		callback(false);
		return;
	}

	NOSQL('users').one().where('login', req.query.login).callback(function(err, response) {

		if (response) {
			response.expire = F.datetime.add('5 minutes');
			user = ONLINE[response.id] = response;
			res.cookie(COOKIE, response.id, '1 day');
			NOSQL('users').hit('all').hit(response.id);
		}

		callback(user ? true : false, user);
	});

});
*/