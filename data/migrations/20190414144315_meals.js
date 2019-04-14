exports.up = function(knex, Promise) {
  return knex.schema.createTable("meals", table => {
    table.increments();

    table.string("restaurant_name", 255);

    table.string("restaurant_type", 255);

    table.string("item_name", 255).notNullable();

    table.string("item_photo", 255);

    table.integer("food_rating", 255);

    table.string("item_comment");

    table.string("wait_time", 255);

    table.date("date_visited");

    table
    .integer("user_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("users")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("meals");
};
