const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("notes").then(notesArr => {
    db("tags")
      .then(tagsArr => {
        let notesWithTags = notesArr.map(note => {
          let tags = tagsArr
            .filter(tag => tag.note_id === note.id)
            .map(tagObj => {
              return tagObj.tags;
            });
          return { ...note, tags };
        });
        res.status(200).json(notesWithTags);
      })
      .catch(error => {
        res.status(500).json({ error: "The notes could not be retrieved." });
      });
  });
});

module.exports = router;
