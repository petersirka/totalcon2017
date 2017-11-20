exports.install = function() {
	ROUTE('#api/users/', json_users);
	ROUTE('#api/products/', json_products);
};

function json_users() {
	this.json({ type: 'users' });
}

function json_products() {
	this.json({ type: 'products' });
}