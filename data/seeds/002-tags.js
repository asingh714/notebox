exports.seed = function(knex, Promise) {
  return knex("tags").insert([
    { tags: "easy", note_id: "3"},
    { tags: "easy", note_id: "2"},
    { tags: "difficult", note_id: "1"},
    { tags: "chores", note_id: "1"},
    { tags: "chores", note_id: "3"},
  ]);
};
