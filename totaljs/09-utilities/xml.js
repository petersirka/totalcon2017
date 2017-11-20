require('total.js');

U.download('https://www.w3schools.com/xml/cd_catalog.xml', ['get'], function(err, response) {
	response.on('data', U.streamer('<CD>', '</CD>', function(item, index) {
		// var xml = item.parseXML();
		console.log(index, item);
	})).on('end', function() {
		console.log('done');
	});
});

/*
U.download('https://www.w3schools.com/xml/cd_catalog.xml', ['get'], function(err, response) {
	var chunker = U.chunker('xml', 5);
	response.on('data', U.streamer('<CD>', '</CD>', function(item) {
		chunker.write(item.parseXML());
	})).on('end', function() {
		chunker.end();
		chunker.each(function(items, next) {
			console.log('--->', items.length);
			setTimeout(next, 2000);
		}, function() {
			chunker.destroy();
			console.log('done');
		});
	});
});*/