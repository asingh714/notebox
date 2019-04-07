const middleware = require("./middleware");
const express = require("express");

const notesRouter = require("../routes/notes-router");
const tagsRouter = require("../routes/tags-router");

const server = express();
middleware(server);

server.use("/api/notes", notesRouter);
server.use("/api/tags", tagsRouter);

module.exports = server;
