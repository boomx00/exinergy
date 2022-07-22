
exports.up = function(knex) {
    return knex.schema
        .createTable('products', (table) => {
            table.integer('id').primary();
            table.string('product_name');
            table.string('product_category');
            table.integer('product_price');
            table.integer('product_cost');
            table.string('product_desc');

        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('products')
};
