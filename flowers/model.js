const db = require('./../data/connection.js');

module.exports = {
	all,
	add,
	remove
};

function all() {
	return db('flowers');
}

function add(flower) {
	return db('flowers').insert(flower, 'id');
}

function remove(id) {
	return db('flowers')
		.where({ id })
		.del();
}
