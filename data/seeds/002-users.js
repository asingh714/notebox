exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Jon", password: "password", user_id: 1 },
        { username: "Arya", password: "password", user_id: 2 },
        { username: "Sansa", password: "password", user_id: 3 }
      ]);
    });
};
