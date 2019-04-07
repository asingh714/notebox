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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("notes")
    .where({ id })
    .first()
    .then(note => {
      if (note) {
        db("tags")
          .where({ note_id: id })
          .then(tagsArr => {
            let tags = tagsArr.map(tagObj => tagObj.tags);
            note.tags = tags;
            res.status(200).json(note);
          });
      } else {
        res
          .status(404)
          .json({ error: "The note with the specified ID does not exist" });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The note with the specified ID could not be retrieved."
      });
    });
});

router.post("/", (req, res) => {
  const note = req.body;

  if (!note.title || !note.textBody) {
    res
      .status(400)
      .json({ error: "Please provide a title and text body for the note." });
  } else {
    db("notes")
      .insert(note)
      .then(notes => {
        const id = notes[0];
        db("notes")
          .where({ id })
          .first()
          .then(note => {
            res.status(201).json(note);
          });
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the project to the database."
        });
      });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (!changes.title || !changes.textBody) {
    res
      .status(400)
      .json({ error: "Please provide a title and text body for the note." });
  } else {
    db("notes")
      .where({ id })
      .update(changes)
      .then(count => {
        if (count > 0) {
          db("notes")
            .where({ id })
            .first()
            .then(note => {
              res.status(200).json(note);
            });
        } else {
          res
            .status(404)
            .json({
              message: "The note with the specified ID does not exist."
            });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "The note information could not be modified."
        });
      });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("notes")
    .where({ id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json(count)
      } else {
        res.status(404).json({
          message: "The note with the specified ID does not exist."
        })
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The note could not be removed."
      })
    })
})

module.exports = router;