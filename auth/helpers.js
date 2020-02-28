const db = require('../data/connection.js');

module.exports = {
	add,
	find,
	findBy,
	findById
};

function find() {
	return db('users')
		.select('id', 'username', 'password', 'department')
		.where('department', 'awesome');
}

function findBy(filter) {
	console.log('filter', filter);
	return db('users').where({ filter });
}

async function add(user) {
	const [id] = await db('users').insert(user);
	console.log('id', id);
	return findById(id);
}

function findById(id) {
	return db('users')
		.where({ id })
		.first();
}
