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

router.post("/", (req, res) => {
  const tag = req.body;
  if (!tag.tags || !tag.note_id) {
    res
      .status(400)
      .json({ error: "Please provide a tag and note_id for the tag." });
  } else {
    db("tags")
      .insert(tag)
      .then(tags => {
        const id = tags[0];
        db("tags")
          .where({ id })
          .first()
          .then(note => {
            res.status(201).json(note);
          });
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the tag to the database."
        });
      });
  }
});

module.exports = router;
