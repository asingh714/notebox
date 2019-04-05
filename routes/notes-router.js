const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("notes")
  .then(notes => {
    res.status(200).json(notes);
  })
  .catch(error => {
    res.status(500).json({ error: "The notes could not be retrieved." })
  })
})

module.exports = router;