exports.seed = function(knex, Promise) {
  return knex("notes").insert([
    {
      title: "Clean Room",
      textBody:
        "Bacon ipsum dolor amet burgdoggen ribeye doner, jerky ground round meatloaf beef shankle buffalo."
    },
    {
      title: "Get Groceries",
      textBody:
        "Pancetta tri-tip pig pork belly salami t-bone ham tenderloin filet mignon sirloin hamburger ground round. "
    },
    { title: "Laundry", textBody: "Cupim doner frankfurter rump filet mignon." }
  ]);
};
