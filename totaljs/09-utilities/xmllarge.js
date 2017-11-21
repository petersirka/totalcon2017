require('total.js');

U.download('https://www.mevrin.com/totalcon/largexml.xml', ['get'], function(err, response) {
	response.on('data', U.streamer('<StoItem>', '</StoItem>', function(item, index) {
		// var xml = item.parseXML();
		console.log(index, item);
	})).on('end', function() {
		console.log('done');
	});
});