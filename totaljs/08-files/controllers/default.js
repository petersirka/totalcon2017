exports.install = function() {
	FILE('/robots.txt', handle_txt);
};

function handle_txt(req, res) {
	NOSQL('counter').counter.hit(req.uri.pathname.slug());
	// res.send(200, 'This is some plain text file');
	res.continue();
}