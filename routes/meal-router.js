const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("meals")
  .then(meals => {
    res.status(200).json(meals)
  })
  .catch(error => {
    res.status(500).json({ error: "The meals could not be retrieved." })
  })

})


module.exports = router;