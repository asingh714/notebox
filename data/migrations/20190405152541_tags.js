exports.up = function(knex, Promise) {
  return knex.schema.createTable("tags", table => {
    table.increments();
    
    table.string("tags", 255).notNullable();

    table
      .integer("note_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("notes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExits("tags");
};
