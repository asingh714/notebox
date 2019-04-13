exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("meal")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("meal").insert([
        {
          restaurant_name: "Pizza Place",
          restaurant_type: "Italian",
          item_name: "Pepperoni Pizza",
          item_photo:
            "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          food_rating: 5,
          item_comment: "Wow, pizza was so good! I really enjoyed it!",
          wait_time: "About 10 minutes.",
          date_visited: "2018-11-02"
        },
        {
          restaurant_name: "Taco Shop",
          restaurant_type: "Mexican",
          item_name: "Chorizo Tacos",
          item_photo:
            "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
          food_rating: 5,
          item_comment: "These tacos were awesome!",
          wait_time: "There was no wait!",
          date_visited: "2018-07-22"
        },
        {
          restaurant_name: "Burger Joint",
          restaurant_type: "American",
          item_name: "The Great Burger",
          item_photo:
            "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
          food_rating: 3,
          item_comment: "The burger was a bit overcooked.",
          wait_time: "There was a 5 minute wait.",
          date_visited: "2018-08-21"
        }
      ]);
    });
};

/* 
    table.string("restaurant_name", 255);

    table.string("restaurant_type", 255);

    table.string("item_name", 255).notNullable();

    table.string("item_photo", 255);

    table.integer("food_rating", 255);

    table.string("item_comment");

    table.string("wait_time", 255);

    table.date("date_visited"); 
*/
