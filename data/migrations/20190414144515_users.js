exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();

    table
      .string("username", 128)
      .notNullable()
      .unique();
    table.string("password", 128).notNullable();

    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("meals")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
