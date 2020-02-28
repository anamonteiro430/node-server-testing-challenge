exports.up = function(knex) {
	return knex.schema.createTable('flowers', function(tbl) {
		tbl.increments();
		tbl
			.string('name', 255)
			.unique()
			.index()
			.notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('flowers');
};
