const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("tags")
    .then(tags => {
      res.status(200).json(tags);
    })
    .catch(error => {
      res.status(500).json({ error: "The notes could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("tags")
    .where({ id })
    .first()
    .then(tag => {
      if (tag) {
        res.status(200).json(tag);
      } else {
        res
          .status(404)
          .json({ error: "The tag with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The tag with the specified ID could not be retrieved."
      });
    });
});

module.exports = router;
