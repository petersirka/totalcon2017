exports.install = function() {
	ROUTE('#home', 'index');
	ROUTE('#products', json_products);
	ROUTE('#category', json_category);
	ROUTE('#404', plain_404);
};

F.onLocale = function(req) {
	return '';
};

function json_category(category) {
	this.sitemap();
	this.sitemap_replace('category', category.capitalize(), category);
	this.view('products');
}

function json_products() {
	this.sitemap();
	this.view('products');
}

function plain_404() {
	this.plain('Stránka sa nenašla.');
}