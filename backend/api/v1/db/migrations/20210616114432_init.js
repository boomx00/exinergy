
exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id');
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.timestamps(true, true);
        })
        .createTable('user_profiles', (table) => {
            table.integer('user_id').unsigned();
            table.foreign('user_id').references('id').inTable('users').onDelete("CASCADE");
            table.string('name')
            table.integer('phone_number')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('users')
        .dropTable('user_profiles')
       
        
};
